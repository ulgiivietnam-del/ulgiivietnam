const langButtons = document.querySelectorAll('.lang-btn');
const translatable = document.querySelectorAll('[data-mn][data-kz]');

function setLanguage(lang) {
  document.documentElement.lang = lang;
  translatable.forEach((el) => {
    el.textContent = el.dataset[lang];
  });
  langButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === lang));
  localStorage.setItem('uv-lang', lang);
}

langButtons.forEach((btn) => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
setLanguage(localStorage.getItem('uv-lang') || 'mn');

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');

if (header && menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.desktop-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}
