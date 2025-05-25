// ====== Burger Menu Logic for Desktop & Mobile ======
// This script toggles the navigation menu via a burger icon for all screen sizes.

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger-menu');
  const nav = document.getElementById('main-nav');
  const closeBtn = document.getElementById('close-menu'); // optional

  // Open menu
  burger.addEventListener('click', function () {
    nav.classList.add('menu-open');
    burger.setAttribute('aria-expanded', 'true');
    // Optional: Hide burger when menu is open
    burger.style.display = 'none';
    if (closeBtn) closeBtn.style.display = 'block';
  });

  // Close menu (using close button if exists)
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      nav.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.style.display = 'block';
      closeBtn.style.display = 'none';
    });
  }

  // Close menu when clicking outside the nav (optional, for UX)
  document.addEventListener('click', function (e) {
    if (
      nav.classList.contains('menu-open') &&
      !nav.contains(e.target) &&
      e.target !== burger &&
      (!closeBtn || e.target !== closeBtn)
    ) {
      nav.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.style.display = 'block';
      if (closeBtn) closeBtn.style.display = 'none';
    }
  });

  // Accessibility: Close with Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('menu-open')) {
      nav.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.style.display = 'block';
      if (closeBtn) closeBtn.style.display = 'none';
    }
  });


});