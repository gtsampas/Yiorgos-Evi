function openInvite() {
  // Κρύβουμε cover
  document.getElementById('cover').style.display = 'none';

  // Δείχνουμε one-page content
  const page = document.getElementById('onepage');
  page.style.display = 'block';
  page.style.opacity = 1;

  // Παίζουμε μουσική
  const audio = document.getElementById('music');
  audio.play().catch(() => {
    alert("Πατήστε ξανά για να ξεκινήσει η μουσική");
  });
}
