// Visual Novel selector functionality
document.addEventListener('DOMContentLoaded', function() {
  const vnButtons = document.querySelectorAll('.vn-selector-btn');
  const downloadCards = document.querySelectorAll('.download-card');
  
  // Set active button
  vnButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      vnButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Update download links based on selected VN
      const vnType = button.dataset.vn;
      updateDownloadLinks(vnType);
    });
  });
  
  // Update download links function
  function updateDownloadLinks(vnType) {
    // For demonstration, we're just showing a console message
    // In a real implementation, you would update the href attributes of the download links
    console.log(`Selected VN type: ${vnType}`);
    
    // Add animation for changing content
    downloadCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        // Here you would update the actual content
        // For example:
        // const title = card.querySelector('h3').textContent;
        // if (title === 'Versi Desktop') {
        //   card.querySelector('.download-btn').href = `downloads/${vnType}-desktop.zip`;
        // }
        
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 300);
    });
  }
});