// ====== Glassmorphism Tab Menu Logic (REPLACES old menu.js) ======
// This code is for a desktop glassy tab menu with active highlighting
// It assumes your HTML includes the nav.menu structure as below

document.addEventListener('DOMContentLoaded', function () {
  // Set 'active' class on the nav menu based on current page
  const menuLinks = [
    { file: 'index.html', tab: 0 },
    { file: 'features.html', tab: 1 },
    { file: 'sugar.html', tab: 2 },
    { file: 'privacy-policy.html', tab: 3 },
    { file: 'contact.html', tab: 4 }
  ];

  // Optionally add more matches
  if (window.location.pathname.includes('sugar-features.html')) {
    document.querySelectorAll('.glass-menu ul li').forEach(li => li.classList.remove('active'));
    document.querySelectorAll('.glass-menu ul li')[2]?.classList.add('active');
  } else {
    const path = window.location.pathname.split('/').pop();
    menuLinks.forEach(link => {
      if (link.file === path) {
        document.querySelectorAll('.glass-menu ul li').forEach(li => li.classList.remove('active'));
        document.querySelectorAll('.glass-menu ul li')[link.tab]?.classList.add('active');
      }
    });
  }

  // Optional: allow keyboard navigation (Tab/Enter)
  document.querySelectorAll('.glass-menu ul li a').forEach(link => {
    link.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        this.click();
      }
    });
  });
});

// ====== END Glassmorphism Tab Menu Logic ======


/* 
======= OLD CODE (replaced for desktop) =======
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
==============================================
*/
