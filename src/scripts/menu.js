const menu = document.querySelector('.menu');
const navLinks = document.getElementById('main-menu');

menu?.addEventListener('click', () => {
  const isExpanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', `${!isExpanded}`);

  // Menü göster/gizle
  if (navLinks) {
    navLinks.style.display = isExpanded ? 'none' : 'flex';
  }
});
