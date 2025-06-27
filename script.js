document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.sticky-nav-toggle');
  const menu = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar a'); // ✅ updated selector

  // Mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('mobile-active');
      const icon = menuToggle.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
  }

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        menu.classList.remove('mobile-active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });
});