// ====== Animated Gradient Tab Menu Logic (Option 4) ======
// This script slides the gradient indicator to the active tab, and sets 'active' based on the page.
// Use with an animated gradient tab HTML/CSS structure.

document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('#gradient-tabs li');
  const indicator = document.querySelector('#gradient-tabs .indicator');
  const menuLinks = [
    { file: 'index.html', tab: 0 },
    { file: 'features.html', tab: 1 },
    { file: 'sugar.html', tab: 2 },
    { file: 'privacy-policy.html', tab: 3 },
    { file: 'contact.html', tab: 4 }
  ];
  // Set active tab
  let idx = 0;
  if (window.location.pathname.includes('sugar-features.html')) {
    idx = 2;
  } else {
    const path = window.location.pathname.split('/').pop();
    menuLinks.forEach(link => {
      if (link.file === path) idx = link.tab;
    });
  }
  tabs.forEach(li => li.classList.remove('active'));
  tabs[idx]?.classList.add('active');
  function moveIndicator(idx) {
    const tab = tabs[idx];
    if (tab && indicator) {
      indicator.style.width = tab.offsetWidth + "px";
      indicator.style.left = tab.offsetLeft + "px";
    }
  }
  moveIndicator(idx);
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', function () {
      tabs.forEach(li => li.classList.remove('active'));
      this.classList.add('active');
      moveIndicator(i);
    });
  });
  window.addEventListener('resize', () => {
    const idx = [...tabs].findIndex(li => li.classList.contains('active'));
    moveIndicator(idx);
  });
});
// ====== END Animated Gradient Tab Menu Logic ======
