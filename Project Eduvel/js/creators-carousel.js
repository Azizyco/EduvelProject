// Creators carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.carousel-arrow.prev');
  const nextButton = document.querySelector('.carousel-arrow.next');
  const creatorCards = document.querySelectorAll('.creator-card');
  const indicators = document.querySelectorAll('.indicator');
  
  let currentIndex = 0;
  
  // Initialize carousel
  function updateCarousel() {
    // Remove all classes
    creatorCards.forEach(card => {
      card.classList.remove('active', 'prev');
    });
    
    indicators.forEach(indicator => {
      indicator.classList.remove('active');
    });
    
    // Add active class to current card
    creatorCards[currentIndex].classList.add('active');
    
    // Add prev class to previous card
    const prevIndex = (currentIndex - 1 + creatorCards.length) % creatorCards.length;
    creatorCards[prevIndex].classList.add('prev');
    
    // Update indicators
    indicators[currentIndex].classList.add('active');
  }
  
  // Next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % creatorCards.length;
    updateCarousel();
  }
  
  // Previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + creatorCards.length) % creatorCards.length;
    updateCarousel();
  }
  
  // Event listeners
  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
  
  // Indicator clicks
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });
  
  // Auto slide every 5 seconds
  let autoSlideInterval = setInterval(nextSlide, 5000);
  
  // Pause auto slide on hover
  const carouselContainer = document.querySelector('.creators-carousel-container');
  
  carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
  });
  
  carouselContainer.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(nextSlide, 5000);
  });
  
  // Touch swipe support
  const carousel = document.querySelector('.creators-carousel');
  let touchStartX = 0;
  let touchEndX = 0;
  
  carousel.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  carousel.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      nextSlide();
    } else if (touchEndX > touchStartX + 50) {
      prevSlide();
    }
  }
  
  // Initialize carousel on load
  updateCarousel();
});