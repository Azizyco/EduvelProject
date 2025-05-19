// Preloader functionality
document.addEventListener('DOMContentLoaded', function() {
  // Simulate loading time (you can remove this in production and rely on actual loading)
  setTimeout(() => {
    // Hide preloader
    const preloader = document.getElementById('preloader');
    preloader.classList.add('fade-out');
    
    // Add loaded class to body to trigger animations
    document.body.classList.add('site-loaded');
    
    // Remove preloader after animation completes
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  }, 1500);
});