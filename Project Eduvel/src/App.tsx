import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Load the index.html in the root div
    const root = document.getElementById('root');
    if (root) {
      // Clear React root content
      root.innerHTML = '';
      
      // Redirect to the vanilla HTML page
      window.location.href = '/index.html';
    }
  }, []);

  return null;
}

export default App;