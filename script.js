// Fotos vorab laden, damit das Business-Foto beim Drucken sofort da ist
new Image().src = 'profilbild_business.jpg';
new Image().src = 'profilbild_casual.jpg';

function toggleProfileImage() {
  const img = document.getElementById('profile-img');
  const btn = document.getElementById('mode-toggle-btn');
  if (img.getAttribute('src').includes('business')) {
    img.src = 'profilbild_casual.jpg';
    btn.textContent = 'Mode: Casual 🌴';
  } else {
    img.src = 'profilbild_business.jpg';
    btn.textContent = 'Mode: Business 💼';
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