// ====== Minimalist Mega Menu Logic (Option 3) ======
// This script highlights the active tab and handles mega menu open/close on desktop.
// Use with a minimalist/mega menu HTML/CSS structure.

document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = [
    { file: 'index.html', tab: 0 },
    { file: 'features.html', tab: 1 },
    { file: 'sugar.html', tab: 2 },
    { file: 'privacy-policy.html', tab: 3 },
    { file: 'contact.html', tab: 4 }
  ];
  if (window.location.pathname.includes('sugar-features.html')) {
    document.querySelectorAll('.minimal-menu ul li').forEach(li => li.classList.remove('active'));
    document.querySelectorAll('.minimal-menu ul li')[2]?.classList.add('active');
  } else {
    const path = window.location.pathname.split('/').pop();
    menuLinks.forEach(link => {
      if (link.file === path) {
        document.querySelectorAll('.minimal-menu ul li').forEach(li => li.classList.remove('active'));
        document.querySelectorAll('.minimal-menu ul li')[link.tab]?.classList.add('active');
      }
    });
  }
  // Mega menu hover/focus handler
  document.querySelectorAll('.minimal-menu ul li.has-mega').forEach(item => {
    item.addEventListener('mouseenter', () => {
      const mega = item.querySelector('.mega-menu');
      if (mega) mega.style.display = 'flex';
    });
    item.addEventListener('mouseleave', () => {
      const mega = item.querySelector('.mega-menu');
      if (mega) mega.style.display = 'none';
    });
    item.addEventListener('focusin', () => {
      const mega = item.querySelector('.mega-menu');
      if (mega) mega.style.display = 'flex';
    });
    item.addEventListener('focusout', () => {
      const mega = item.querySelector('.mega-menu');
      if (mega) mega.style.display = 'none';
    });
  });
});
// ====== END Minimalist Mega Menu Logic ======
