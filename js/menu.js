// ====== Neumorphism Tab Menu Logic (Option 2) ======
// This script highlights the active page/tab for a soft 3D "neumorphic" look menu.
// Use with a corresponding neumorphism CSS menu and the same menu items/order.

document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = [
    { file: 'index.html', tab: 0 },
    { file: 'features.html', tab: 1 },
    { file: 'sugar.html', tab: 2 },
    { file: 'privacy-policy.html', tab: 3 },
    { file: 'contact.html', tab: 4 }
  ];
  // Special case for sugar-features.html
  if (window.location.pathname.includes('sugar-features.html')) {
    document.querySelectorAll('.neumorph-menu ul li').forEach(li => li.classList.remove('active'));
    document.querySelectorAll('.neumorph-menu ul li')[2]?.classList.add('active');
  } else {
    const path = window.location.pathname.split('/').pop();
    menuLinks.forEach(link => {
      if (link.file === path) {
        document.querySelectorAll('.neumorph-menu ul li').forEach(li => li.classList.remove('active'));
        document.querySelectorAll('.neumorph-menu ul li')[link.tab]?.classList.add('active');
      }
    });
  }
  // Enable keyboard nav
  document.querySelectorAll('.neumorph-menu ul li a').forEach(link => {
    link.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') this.click();
    });
  });
});
// ====== END Neumorphism Tab Menu Logic ======
