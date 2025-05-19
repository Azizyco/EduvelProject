// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  
  // Check for saved theme preference or use user's system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Set initial theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-mode');
  }
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Save theme preference
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Update theme when system preference changes
  prefersDarkScheme.addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }
  });
});