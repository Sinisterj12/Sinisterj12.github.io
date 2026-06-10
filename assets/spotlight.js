document.addEventListener('DOMContentLoaded', () => {
  // Only initialize on desktop devices that support hover interaction
  if (window.matchMedia('(hover: hover)').matches) {
    const spotlight = document.createElement('div');
    spotlight.className = 'spotlight-glow';
    document.body.appendChild(spotlight);

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isMoving = false;

    window.addEventListener('mousemove', (e) => {
      if (!isMoving) {
        document.body.classList.add('has-spotlight');
        isMoving = true;
      }
      targetX = e.clientX;
      targetY = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      document.body.classList.remove('has-spotlight');
      isMoving = false;
    });

    const animateSpotlight = () => {
      // Smooth linear interpolation (lerp)
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      
      spotlight.style.setProperty('--x', `${currentX}px`);
      spotlight.style.setProperty('--y', `${currentY}px`);
      
      requestAnimationFrame(animateSpotlight);
    };
    
    requestAnimationFrame(animateSpotlight);
  }
});
