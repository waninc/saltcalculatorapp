// Burger Menu Toggle for Professional Look
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const mobileMenu = document.getElementById('mobileMenu');

  // Toggle mobile menu
  hamburgerMenu.addEventListener('click', function () {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (event) {
    if (!hamburgerMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
      hamburgerMenu.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  });

  // Close menu when selecting a link
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', function () {
      hamburgerMenu.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
});
