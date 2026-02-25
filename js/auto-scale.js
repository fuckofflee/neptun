// ============================================================================
// AUTO-SCALE VIEWPORT - Fits your MacBook Air design on ANY screen
// No scrollbars - perfect scaling like viewing a PDF
// ============================================================================

// Your MacBook Air M1 dimensions (reference design)
const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 900;

// Auto-scale function
function scaleToFit() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  // Calculate scale factors
  const scaleX = windowWidth / DESIGN_WIDTH;
  const scaleY = windowHeight / DESIGN_HEIGHT;
  
  // Use the smaller scale to ensure everything fits (no scrollbars)
  const scale = Math.min(scaleX, scaleY);
  
  // Apply scaling to body
  document.body.style.width = `${DESIGN_WIDTH}px`;
  document.body.style.height = `${DESIGN_HEIGHT}px`;
  document.body.style.transformOrigin = '0 0';
  document.body.style.transform = `scale(${scale})`;
  
  // Center if there's extra space
  const scaledWidth = DESIGN_WIDTH * scale;
  const scaledHeight = DESIGN_HEIGHT * scale;
  const offsetX = (windowWidth - scaledWidth) / 2;
  const offsetY = (windowHeight - scaledHeight) / 2;
  
  if (offsetX > 0) {
    document.body.style.marginLeft = `${offsetX}px`;
  }
  if (offsetY > 0) {
    document.body.style.marginTop = `${offsetY}px`;
  }
  
  // Prevent scrollbars
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
}

// Run on page load
window.addEventListener('load', scaleToFit);

// Re-scale on window resize
window.addEventListener('resize', scaleToFit);

// Initial call
scaleToFit();
