// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  // Add scrolled class to header when page is scrolled
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Toggle mobile menu
  mobileMenuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    
    // Transform menu toggle icon into X
    const spans = mobileMenuToggle.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
  
  // Close mobile menu when a link is clicked
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      
      // Reset menu toggle icon
      const spans = mobileMenuToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
  
  // Active link highlighting
  function setActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all nav links
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active class to current section link
        document.querySelector(`.nav-links a[href="#${sectionId}"]`).classList.add('active');
        
        // Also update mobile menu links if needed
        const mobileLink = document.querySelector(`.mobile-menu a[href="#${sectionId}"]`);
        if (mobileLink) {
          mobileMenuLinks.forEach(link => link.classList.remove('active'));
          mobileLink.classList.add('active');
        }
      }
    });
  }
  
  // Set active link on scroll
  window.addEventListener('scroll', setActiveLink);
  
  // Set active link on page load
  setActiveLink();
});