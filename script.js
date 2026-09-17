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

// Add one visual for each day on the women's Phu Quoc itinerary page.
const itineraryDays = document.querySelectorAll('.detail-page .itinerary .day');
if (itineraryDays.length === 7) {
  const dayImages = [
    ['images/day-01.webp', 'Phu Quoc resort arrival'],
    ['images/day-02.webp', 'Phu Quoc beach photo day'],
    ['images/day-03.webp', 'Phu Quoc island hopping boat trip'],
    ['images/day-04.webp', 'Grand World Phu Quoc'],
    ['images/day-05.webp', 'Hon Thom and Sunset Town'],
    ['images/day-06.webp', 'Phu Quoc spa and shopping day'],
    ['images/day-07.webp', 'Phu Quoc departure day']
  ];

  const itineraryStyle = document.createElement('style');
  itineraryStyle.textContent = `
    .detail-page .day{grid-template-columns:64px 154px minmax(0,1fr);gap:14px;align-items:center;padding:14px 0}
    .detail-page .day-image{width:154px;height:96px;object-fit:cover;border-radius:14px;box-shadow:0 6px 18px rgba(18,37,52,.08)}
    @media(max-width:900px){
      .detail-page .day{grid-template-columns:58px 130px minmax(0,1fr)}
      .detail-page .day-image{width:130px;height:86px}
    }
    @media(max-width:560px){
      .detail-page .day{grid-template-columns:46px 92px minmax(0,1fr);gap:8px;padding:12px 0}
      .detail-page .day-no{width:44px;height:44px;font-size:1.2rem}
      .detail-page .day-image{width:92px;height:70px;border-radius:10px}
      .detail-page .day h3{font-size:.97rem;margin-bottom:3px}
      .detail-page .day p{font-size:.82rem;line-height:1.42}
    }
  `;
  document.head.appendChild(itineraryStyle);

  itineraryDays.forEach((day, index) => {
    if (day.querySelector('.day-image')) return;
    const img = document.createElement('img');
    img.className = 'day-image';
    img.src = dayImages[index][0];
    img.alt = dayImages[index][1];
    img.loading = 'lazy';
    const number = day.querySelector('.day-no');
    if (number) number.insertAdjacentElement('afterend', img);
  });
}
