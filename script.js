const langButtons = document.querySelectorAll('.lang-btn');
const translatable = document.querySelectorAll('[data-mn][data-kz]');

function setLanguage(lang) {
  document.documentElement.lang = lang;
  translatable.forEach(el => {
    el.textContent = el.dataset[lang];
  });
  langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  localStorage.setItem('uv-lang', lang);
}

langButtons.forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
setLanguage(localStorage.getItem('uv-lang') || 'mn');

document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.desktop-nav a').forEach(a => a.addEventListener('click', () => {
  header.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

// Contact details
const contactBoxes = document.querySelectorAll('.contact-box');
contactBoxes.forEach(box => {
  const title = box.querySelector('strong');
  const detail = box.querySelector('small');
  if (!title || !detail) return;

  const label = title.textContent.trim().toLowerCase();
  if (label === 'facebook') {
    box.style.cursor = 'pointer';
    detail.textContent = 'Facebook хуудас';
    box.addEventListener('click', () => {
      window.open('https://www.facebook.com/profile.php?id=61594274105420', '_blank', 'noopener');
    });
  } else if (label === 'утас' || label === 'телефон') {
    box.style.cursor = 'pointer';
    detail.textContent = '99908222';
    box.addEventListener('click', () => {
      window.location.href = 'tel:+97699908222';
    });
  } else if (label === 'email') {
    box.style.cursor = 'pointer';
    detail.textContent = 'ulgii.vietnam@gmail.com';
    box.addEventListener('click', () => {
      window.location.href = 'mailto:ulgii.vietnam@gmail.com';
    });
  }
});
