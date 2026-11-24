// Fotos vorab laden, damit das Business-Foto beim Drucken sofort da ist
new Image().src = 'profilbild_business.jpg';
new Image().src = 'profilbild_casual.jpg';

function toggleProfileImage() {
  const img = document.getElementById('profile-img');
  const btn = document.getElementById('mode-toggle-btn');
  if (img.getAttribute('src').includes('business')) {
    img.src = 'profilbild_casual.jpg';
    btn.textContent = 'Mode: Casual';
  } else {
    img.src = 'profilbild_business.jpg';
    btn.textContent = 'Mode: Business';
  }
}

// Beim Drucken/PDF-Export immer das Business-Foto verwenden
let srcBeforePrint = null;

window.addEventListener('beforeprint', () => {
  const img = document.getElementById('profile-img');
  srcBeforePrint = img.getAttribute('src');
  img.src = 'profilbild_business.jpg';
});

window.addEventListener('afterprint', () => {
  if (srcBeforePrint) {
    document.getElementById('profile-img').src = srcBeforePrint;
  }
});

// ---------- Sprachumschaltung (DE Standard / EN) ----------
// Deutsch steht im HTML, Englisch in translations.js
const i18nElements = document.querySelectorAll('[data-i18n]');
const langSelect = document.getElementById('lang-select');
const profileImg = document.getElementById('profile-img');
const originalMeta = { title: document.title, alt: profileImg.alt };

// Deutsche Originale einmal sichern, damit DE nicht doppelt gepflegt werden muss
i18nElements.forEach(el => {
  el.dataset.de = el.innerHTML;
});

function setLanguage(lang) {
  const t = translations[lang] || {};
  const isDe = lang === 'de';

  i18nElements.forEach(el => {
    // Fehlt eine Übersetzung, bleibt der deutsche Text stehen
    el.innerHTML = isDe ? el.dataset.de : (t[el.dataset.i18n] ?? el.dataset.de);
  });

  document.title = isDe ? originalMeta.title : (t['meta.title'] ?? originalMeta.title);
  profileImg.alt = isDe ? originalMeta.alt : (t['meta.imgAlt'] ?? originalMeta.alt);
  document.documentElement.lang = lang;
  langSelect.value = lang;
  localStorage.setItem('lang', lang);
}

langSelect.addEventListener('change', e => setLanguage(e.target.value));

setLanguage(localStorage.getItem('lang') || 'de');
