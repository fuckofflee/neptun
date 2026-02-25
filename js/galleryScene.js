import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';
import { CONFIG } from './config.js';

export function createGallery() {
  const group = new THREE.Group();
  group.scale.set(1, 1, 1); 

  const w = CONFIG.CUBE_WIDTH / 2;
  const h = CONFIG.CUBE_HEIGHT / 2;
  const d = CONFIG.CUBE_DEPTH / 2;

  const positions = [
    [-w,  h,  d], [ w,  h,  d],
    [ w, -h,  d], [-w, -h,  d],
    [-w,  h, -d], [ w,  h, -d],
    [ w, -h, -d], [-w, -h, -d]
  ];

  const planeW = CONFIG.IMAGE_PIXEL_WIDTH * CONFIG.PIXEL_TO_WORLD;
  const planeH = CONFIG.IMAGE_PIXEL_HEIGHT * CONFIG.PIXEL_TO_WORLD;
  const planeAspect = planeW / planeH;

  const lineMaterial = new THREE.MeshBasicMaterial({
    color: CONFIG.LINE_COLOR,
    transparent: true,
    opacity: CONFIG.LINE_OPACITY
  });

  const textureLoader = new THREE.TextureLoader();

  positions.forEach((pos, i) => {
    const folderName = `project${i + 1}`;
    const texturePath = `${CONFIG.IMAGES_PATH}${folderName}/cover.jpg`;

    const texture = textureLoader.load(texturePath, (tex) => {
        const imageAspect = tex.image.width / tex.image.height;
        tex.center.set(0.5, 0.5);
        if (imageAspect > planeAspect) {
          tex.repeat.set(planeAspect / imageAspect, 1);
        } else {
          tex.repeat.set(1, imageAspect / planeAspect);
        }
    });
    texture.colorSpace = THREE.SRGBColorSpace; 

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 1
    });

    const image = new THREE.Mesh(new THREE.PlaneGeometry(planeW, planeH), material);
    image.position.set(pos[0], pos[1], pos[2]);
    
    const lookTarget = new THREE.Vector3(pos[0] * 2, pos[1] * 2, pos[2] * 2);
    image.lookAt(lookTarget);
    
    image.scale.set(0, 0, 0);
    
    image.userData.isGalleryImage = true; 
    image.userData.projectIndex = i; 

    group.add(image);

    if (CONFIG.SHOW_LINES) {
      const center = new THREE.Vector3(0, 0, 0);
      const target = new THREE.Vector3(pos[0], pos[1], pos[2]);
      const direction = new THREE.Vector3().subVectors(target, center).normalize();
      const totalDistance = center.distanceTo(target);

      const startDist = CONFIG.LINE_START_OFFSET;
      const endDist = totalDistance - CONFIG.LINE_END_OFFSET;

      if (endDist > startDist) {
        const lineLength = endDist - startDist;
        const lineGeo = new THREE.CylinderGeometry(
          CONFIG.LINE_THICKNESS, 
          CONFIG.LINE_THICKNESS, 
          lineLength, 
          8
        );
        const line = new THREE.Mesh(lineGeo, lineMaterial);
        const midDist = startDist + (lineLength / 2);
        const midPoint = direction.clone().multiplyScalar(midDist);
        
        line.position.copy(midPoint);
        line.lookAt(target);
        line.rotateX(Math.PI / 2);
        line.scale.set(0, 0, 0);

        group.add(line);
      }
    }
  });

  return group;
}

// COMPLETELY REWRITTEN - Creates button AFTER texture loads with correct size
function createButton(config, userData) {
  const textureLoader = new THREE.TextureLoader();
  
  return new Promise((resolve) => {
    const texture = textureLoader.load(config.SVG_PATH, (tex) => {
      // Calculate correct size based on aspect ratio
      const aspectRatio = tex.image.width / tex.image.height;
      const height = config.SIZE;
      const width = height * aspectRatio;
      
      // Create geometry with CORRECT size from the start
      const geometry = new THREE.PlaneGeometry(width, height);
      const material = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 1,
        side: THREE.DoubleSide,
        depthTest: false,
      });
      
      tex.anisotropy = 16;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      
      const button = new THREE.Mesh(geometry, material);
      button.position.set(config.POSITION_X, config.POSITION_Y, config.POSITION_Z);
      button.renderOrder = 999;
      
      // Add user data
      Object.assign(button.userData, userData, { clickScale: config.CLICK_SCALE });
      
      resolve(button);
    });
  });
}

export async function createUIButtons() {
  const buttons = [];
  
  // Create all buttons and WAIT for textures to load
  const [aboutBtn, contactBtn, englishBtn, frenchBtn, slashBtn] = await Promise.all([
    createButton(CONFIG.ABOUT_BUTTON, { isAboutButton: true }),
    createButton(CONFIG.CONTACT_BUTTON, { isContactButton: true }),
    createButton(CONFIG.ENGLISH_BUTTON, { isEnglishButton: true }),
    createButton(CONFIG.FRENCH_BUTTON, { isFrenchButton: true }),
    createButton(CONFIG.LANGUAGE_SLASH, { isLanguageSlash: true })
  ]);
  
  buttons.push(aboutBtn, contactBtn, englishBtn, frenchBtn, slashBtn);
  
  return buttons;
}
