const openBtn = document.getElementById('openBtn');
const playBtn = document.getElementById('playMusicBtn');
const audio = document.getElementById('music');

openBtn.addEventListener('click', () => {
  document.getElementById('cover').style.display = 'none';
  document.getElementById('onepage').style.display = 'block';
  // ΜΗΝ παίζεις μουσική εδώ
});

playBtn.addEventListener('click', () => {
  audio.play().catch(err => {
    alert("Πατήστε ξανά για να ξεκινήσει η μουσική."); 
    console.log(err);
  });
  playBtn.style.display = 'none';
});
