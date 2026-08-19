function toggleProfileImage() {
  const img = document.getElementById('profile-img');
  const btn = document.getElementById('mode-toggle-btn');
  if (img.getAttribute('src') === 'profilbild_casual.jpg') {
    img.src = 'profilbild_business.jpg';
    btn.textContent = 'Mode: Business 💼';
  } else {
    img.src = 'profilbild_casual.jpg';
    btn.textContent = 'Mode: Casual 🌴';
  }
}
