// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function () {
    navLinks.style.display =
      navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

  // Close menu when a link is clicked (for single page navigation)
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 992) {
        navLinks.style.display = 'none';
      }
    });
  });

  // Responsive adjustment
  window.addEventListener('resize', function () {
    if (window.innerWidth > 992) {
      navLinks.style.display = 'flex';
    } else {
      navLinks.style.display = 'none';
    }
  });
});
