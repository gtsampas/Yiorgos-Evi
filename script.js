const button = document.getElementById('openBtn');
const audio = document.getElementById('music');

button.addEventListener('click', () => {
  // Κρύβουμε cover
  document.getElementById('cover').style.display = 'none';
  
  // Δείχνουμε one-page content
  const page = document.getElementById('onepage');
  page.style.display = 'block';
  page.style.opacity = 1;

  // Παίζουμε μουσική αμέσως
  audio.play().catch(() => {
    alert("Πατήστε ξανά για να ξεκινήσει η μουσική.");
  });
});
