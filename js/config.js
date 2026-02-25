export const CONFIG = {
  FAVICON_PATH: './img/neptun.ico?v=2',
  
  USE_DIRECTIONAL_LIGHT: true, 
  DIRECTIONAL_LIGHT_INTENSITY: 2.5,
  AMBIENT_LIGHT_INTENSITY: 1.5, 

  CAMERA_DISTANCE: 20,
  FOV: 50,

  // --- OBJECTS CONFIGURATION ---
  MAIN_OBJECT_PATH: './models/mainObject.obj',
  SECOND_OBJECT_PATH: './models/secondObject.obj',
  
  OBJECT_SCALE: 0.38, 

  // Visual Parameters (Shared)
  OBJECT_COLOR: '#92ff24',    
  OBJECT_SHININESS: 0.0005,     
  OBJECT_METALNESS: 0.01,      

  // Independent Rotation Speeds
  MAIN_OBJECT_ROTATION_SPEED: 0.003, 
  SECOND_OBJECT_ROTATION_SPEED: 0.006, 

  CUBE_WIDTH: 8.5,
  CUBE_HEIGHT: 8.5,
  CUBE_DEPTH: 8.5,

  GALLERY_ROTATION_SPEED: 0.001,    
  
  IMAGE_PIXEL_WIDTH: 1200,
  IMAGE_PIXEL_HEIGHT: 800,
  PIXEL_TO_WORLD: 0.004,

  IMAGE_VIEW_RATIO: 0.4, 
  ANIMATION_SPEED: 0.05,
  EXPANSION_SPEED: 0.03,
  FADE_SPEED: 0.05,
  POP_SPEED: 0.09, 
  POP_RANDOMNESS: 950,
  
  ROTATION_SENSITIVITY: 0.0045,
  ROTATION_DAMPING: 0.95,
  CLICK_DISTANCE_THRESHOLD: 10, 

  SHOW_LINES: true,
  LINE_COLOR: 0x000000,
  LINE_THICKNESS: 0.003,
  LINE_OPACITY: 0.8,
  LINE_START_OFFSET: 3, 
  LINE_END_OFFSET: 0.52,  
  
  OVERLAY: {
    IMAGE: {
        position: 'relative', 
        marginTop: '0px',
        marginBottom: '40px',
        marginLeft: 'auto',
        marginRight: 'auto',
        zIndex: '10'
    },
    TEXT: {
        position: 'absolute', 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        width: '80%', 
        maxWidth: '800px',
        textAlign: 'center', 
        zIndex: '20' 
    }
  },
  
  TEXT_ALIGNMENT: 'center', 
  
  FONTS: {
    TITLE: {
      path: './fonts/SFPRODISPLAYBOLD.OTF', 
      family: 'TitleFont',
      weight: 'normal',
      style: 'normal'
    },

    TITLE2: {
      path: './fonts/PerfectoCalligraphy.ttf', 
      family: 'TitleFont2',
      weight: 'normal',
      style: 'normal'
    },

    SUBTITLE: {
      path: './fonts/SFPRODISPLAYMEDIUM.OTF',
      family: 'SubtitleFont',
      weight: 'normal',
      style: 'normal'
    },
    TEXT: {
      path: './fonts/SFPRODISPLAYMEDIUM.OTF',
      family: 'TextFont',
      weight: 'normal',
      style: 'normal'
    }
  },

  IMAGES_PATH: './img/',

  // --- ARROW CONFIGURATION ---
  ARROW: {
    PATH: './img/arrow.svg',
    SIZE: 1,                    // Size of the arrow in World Space
    POSITION_X: 0,              // Horizontal Position (0 = Center)
    POSITION_Y: -3.5,           // Vertical Position (Negative = Below objects)
    HIDDEN_OPACITY: 0,          // Opacity when hidden
    VISIBLE_OPACITY: 1,         // Opacity when visible
    APPEAR_SPEED: 0.08,         // Speed of fade-in animation (higher = faster)
    DISAPPEAR_SPEED: 0.12,      // Speed of fade-out animation (higher = faster)
    CLICK_SCALE: 0.8            // Scale when clicked (animation)
  },

  // --- LIQUID GLASS CURSOR CONFIGURATION ---
  CURSOR: {
    SIZE: 20, 
    DELAY: 0, 
    CLICK_SCALE: 0.8,
    GLASS_SHADOWS: `
      inset 1px 1px 3px rgba(255, 255, 255, 0.9),
      inset -1px -1px 5px rgba(0, 0, 0, 0.1),
      inset 0 0 15px rgba(255, 255, 255, 0.3),
      0 4px 15px rgba(0, 0, 0, 0.15)
    `,
    GLASS_BACKGROUND: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
    BLUR: '6px'
  },

  // --- ABOUT & CONTACT BUTTONS (Gallery Scene) ---
  ABOUT_BUTTON: {
    SVG_PATH:   './img/about.svg',
    POSITION_X: -13.75,              // World space X position
    POSITION_Y: 8.6,              // World space Y position  
    POSITION_Z: 0,                 // World space Z position
    SIZE:       1,               // Scale in world space
    CLICK_SCALE: 0.85,             // Scale on click
  },

  CONTACT_BUTTON: {
    SVG_PATH:   './img/contact.svg',
    POSITION_X: -11.5,               // World space X position
    POSITION_Y: 8.6,              // World space Y position
    POSITION_Z: 0,                 // World space Z position
    SIZE:       1,               // Scale in world space
    CLICK_SCALE: 0.85,             // Scale on click
  },

  ENGLISH_BUTTON: {
    SVG_PATH:   './img/en.svg',
    POSITION_X: 12.25,              // World space X position
    POSITION_Y: 8.6,               // World space Y position
    POSITION_Z: 0,                 // World space Z position
    SIZE:       6.5,               // Scale in world space
    CLICK_SCALE: 0.85,             // Scale on click
    OPACITY_ACTIVE: 1.0,           // Opacity when this language is selected
    OPACITY_INACTIVE: 0.5,         // Opacity when other language is selected
  },

  FRENCH_BUTTON: {
    SVG_PATH:   './img/fr.svg',
    POSITION_X: 13.75,             // World space X position
    POSITION_Y: 8.6,               // World space Y position
    POSITION_Z: 0,                 // World space Z position
    SIZE:       6.5,               // Scale in world space
    CLICK_SCALE: 0.85,             // Scale on click
    OPACITY_ACTIVE: 1.0,           // Opacity when this language is selected
    OPACITY_INACTIVE: 0.5,         // Opacity when other language is selected
  },

  LANGUAGE_SLASH: {
    SVG_PATH:   './img/slash.svg',
    POSITION_X: 13,            // World space X position (centered between EN and FR)
    POSITION_Y: 8.6,               // World space Y position
    POSITION_Z: 0,                 // World space Z position
    SIZE:       6.5,               // Scale in world space
  },

  // --- ABOUT & CONTACT SCENE IMAGES ---
  ABOUT_IMAGE: {
    PATH: './img/profile.png',
    POSITION_X: '16%',             // CSS position
    POSITION_Y: '76%',             // CSS position
    TRANSFORM: 'translate(-50%, -50%)',  // CSS transform for centering
    WIDTH: '400px',                // Image width
    HEIGHT: 'auto',                // Image height
    MARGIN_TOP: '40px',
    POP_DELAY: 5500,               // Delay before image pops in (ms)
  },

  // --- ABOUT PAGE CV (JPG IMAGE) ---
  ABOUT_CV: {
    ENABLED: true,
    PATH_EN: './img/cvenglish.jpg',     // English CV as JPG
    PATH_FR: './img/cvfrancais.jpg',     // French CV as JPG
    POSITION_X: '68.5%',             // CSS position
    POSITION_Y: '50%',             // CSS position
    WIDTH: 'auto',               // Image width (1080x1080 square)
    HEIGHT: '100vh',              // Image height
    TRANSFORM: 'translate(-50%, -50%)',
    POP_DELAY: 5800,               // Delay before CV pops in (ms)
  },

  CONTACT_IMAGE: {
    PATH: './img/neptun.png',
    POSITION_X: '15%',
    POSITION_Y: '47%',
    TRANSFORM: 'translate(-50%, -50%)',
    WIDTH: '500px',
    HEIGHT: 'auto',
    MARGIN_TOP: '40px',
    POP_DELAY: 4300,
  },

  // --- CONTACT PAGE LINKS ---
  CONTACT_LINKS: {
    EMAIL: 'leonmartinbergot@hotmail.com',
    INSTAGRAM_URL: 'https://www.instagram.com/neptunhuh/',
  },

  // --- IMAGE CANVAS SCENE CONFIGURATION ---
  IMAGE_CANVAS: {

    // ═══════════════════════════════════════════════════════════
    // LEFT PANEL
    // ═══════════════════════════════════════════════════════════
    LEFT_PANEL: {
      WIDTH:            '38%',
      BACKGROUND_COLOR: '#ffffff',
      PADDING:          '60px',

      // ── Title: array of parts so you can mix fonts on one line ──
      // Each part renders as an inline <span> — they flow together.
      // To break to a new line, add a part with text: '\n' or use
      // DISPLAY_BLOCK: true on any part.
      TITLE: {
        ENABLED: true,
        MARGIN_BOTTOM: '32px',
        // Two-font example:
        //   part 0  →  TitleFont bold uppercase
        //   part 1  →  SubtitleFont italic  (different weight/style)
        PARTS: [
          {
            // e.g. "@ambients" in big bold caps
            FONT_FAMILY:    'TitleFont',
            FONT_SIZE:      '85px',
            FONT_WEIGHT:    'bold',
            FONT_STYLE:     'normal',
            COLOR:          '#000000',
            LETTER_SPACING: '-5px',
            LINE_HEIGHT:   '0.85',
            DISPLAY_BLOCK:  true   // forces a line-break after this part
          },
          {
            // e.g. subtitle / descriptor in italic serif
            FONT_FAMILY:    'TitleFont2',
            FONT_SIZE:      '85px',
            FONT_WEIGHT:    'normal',
            FONT_STYLE:     'normal',
            COLOR:          '#000000',
            LETTER_SPACING: '0px',
            TEXT_TRANSFORM: 'none',
            DISPLAY_BLOCK:  false
          }
        ]
      },

      // Project description line
      SUBTITLE: {
        ENABLED:       true,
        FONT_FAMILY:   'SubtitleFont',
        FONT_SIZE:     '24px',
        FONT_WEIGHT:   'normal',
        FONT_STYLE:    'italic',
        COLOR:         '#000000',
        LINE_HEIGHT:   '0.85',
        LETTER_SPACING:'0.5px',
        MARGIN_BOTTOM: '30px'
      },

      // Small metadata rows (date, client, etc.)
      METADATA: {
        ENABLED:       true,
        FONT_FAMILY:   'TextFont',
        FONT_SIZE:     '13px',
        FONT_WEIGHT:   'normal',
        COLOR:         '#999999',
        LINE_HEIGHT:   '0.85',
        LETTER_SPACING:'0.3px',
        MARGIN_BOTTOM: '6px',
        ITEMS: {
          DATE:          { LABEL: 'Date',          ENABLED: true },
          CLIENT:        { LABEL: 'Client',        ENABLED: true },
          COLLABORATION: { LABEL: 'Collaboration', ENABLED: true },
          CATEGORY:      { LABEL: 'Category',      ENABLED: true }
        }
      },
    },

    // ═══════════════════════════════════════════════════════════
    // RIGHT PANEL
    // ═══════════════════════════════════════════════════════════
    RIGHT_PANEL: {
      WIDTH:                '60%',
      BACKGROUND_COLOR:     '#ffffff',
      PADDING:              '60px',
      SCROLL_PADDING_TOP:   '0px',     // aligns first image top with left panel content
      SCROLL_PADDING_BOTTOM:'120px',   // extra room so last image clears the close btn

      MEDIA: {
        HEIGHT: 200,
        SPACING: 20,

        HOVER: {
          ENABLED:             true,
          SCALE:               1.2,
          TRANSITION_DURATION: '0.4s',
          CURSOR:              'pointer'
        },

        EXPAND: {
          ENABLED:             true,
          SCALE:               2.4,
          TRANSITION_DURATION: '0.6s'
        }
      }
    },

    // ═══════════════════════════════════════════════════════════
    // CLOSE BUTTON  (PNG image, bottom-centre)
    // ═══════════════════════════════════════════════════════════
    CLOSE_BUTTON: {
      IMAGE_PATH:    './img/close.png',
      // Idle state (small + subtle)
      WIDTH_IDLE:    '28px',
      HEIGHT_IDLE:   '28px',
      OPACITY_IDLE:  0.25,
      // Hovered state (larger + opaque)
      WIDTH_HOVER:   '40px',
      HEIGHT_HOVER:  '40px',
      OPACITY_HOVER: 1.0,
      // 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
      POSITION:      'bottom-center',
      OFFSET_Y:      '32px',
      OFFSET_X:      '40px',          // only used for non-centered positions
      POP_SCALE:     0.78,
      TRANSITION:    '0.25s cubic-bezier(0.34,1.56,0.64,1)',
      Z_INDEX:       10001
    },

    // ═══════════════════════════════════════════════════════════
    // IMAGE TEXT  (appears below each image when clicked)
    // ═══════════════════════════════════════════════════════════
    IMAGE_TEXT: {
      ENABLED:        true,
      FONT_FAMILY:    'TextFont',
      FONT_SIZE:      '18px',
      FONT_WEIGHT:    'normal',
      FONT_STYLE:     'normal',
      COLOR:          '#444444',
      LINE_HEIGHT:    '1',
      LETTER_SPACING: '0.2px',
      TEXT_ALIGN: 'right',
      PADDING_RIGHT: '12px',
      MARGIN_TOP:     '14px',          // gap between image bottom and text
      TYPEWRITER: {
        SPEED:       22,
        CURSOR:      true,
        CURSOR_CHAR: '|'
      }
    },

    // ═══════════════════════════════════════════════════════════
    // VIDEO
    // ═══════════════════════════════════════════════════════════
    VIDEO: {
      AUTOPLAY:  true,
      HOVER_PLAY:false,
      LOOP:      true,
      MUTED:     false,
      CONTROLS:  false
    }
  },

  // --- GALLERY INACTIVITY TIMEOUT ---
  GALLERY_INACTIVITY_TIMEOUT: 20000,

  // --- GALLERY ZOOM ANIMATION ---
  GALLERY_FADE_SPEED: 0.05,

  // --- VIDEO CONFIGURATION ---
  VIDEO_AUTOPLAY: false,
  VIDEO_HOVER_PLAY: true,

  // --- CUBE ROTATION TO IMAGE ANIMATION ---
  CUBE_ALIGN_ROTATION_SPEED:  0.07,   // How fast the cube rotates (0.01 slow – 0.1 fast)
  CUBE_ALIGN_FADE_SPEED:      0.04,   // Fade speed for everything EXCEPT selected image
  CUBE_ALIGN_PAUSE_MS:        150,    // Pause after rotation before fade starts
  CUBE_ALIGN_SELECTED_DELAY:  350,    // ms EXTRA before the selected image starts fading

  // --- CANVAS SCENE ENTRANCE ANIMATION ---
  CANVAS_TEXT_TYPEWRITER_SPEED: 10,
  CANVAS_MEDIA_POP_SPEED:       0.12,
  CANVAS_MEDIA_POP_DELAY_MIN:   100,
  CANVAS_MEDIA_POP_DELAY_MAX:   800,

  // --- CANVAS SCENE EXIT ANIMATION ---
  CANVAS_EXIT_FADE_DELAY_MIN:   50,   // Min random delay before each item starts fading out (ms)
  CANVAS_EXIT_FADE_DELAY_MAX:   500,  // Max random delay (ms)
  CANVAS_EXIT_FADE_SPEED:       0.008, // How fast each item fades (0.05 slow – 0.2 fast)
};
