document.addEventListener('DOMContentLoaded', function() {
  const logoutButton = document.querySelector('#logout-button');

  logoutButton.addEventListener('click', function() {
    // Remove only the session data or logged-in user information
    localStorage.removeItem('loggedInUser');
    
    // Optional: Show a confirmation message
    if (confirm('Are you sure you want to logout?')) {
      // Redirect to the home page or login page
      window.location.href = '../index.html';  // Adjust the path as needed
    }
  });
});
