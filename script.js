const openBtn = document.getElementById('openBtn');
const playBtn = document.getElementById('playMusicBtn');
const audio = document.getElementById('music');

openBtn.addEventListener('click', () => {

  // κρύβει cover
  document.getElementById('cover').style.display = 'none';

  // δείχνει invitation
  document.getElementById('onepage').style.display = 'block';

  // παίζει μουσική
  audio.play().catch(err => {
    console.log("Autoplay blocked, waiting for user interaction", err);
  });

});

playBtn.addEventListener('click', () => {

  audio.play().catch(err => {
    alert("Πατήστε ξανά για να ξεκινήσει η μουσική.");
    console.log(err);
  });

  playBtn.style.display = 'none';

});


const openBtn = document.getElementById('openBtn');
const audio = document.getElementById('music');

openBtn.addEventListener('click', () => {

  // κρύβει cover
  document.getElementById('cover').style.display = 'none';

  // δείχνει invitation
  document.getElementById('onepage').style.display = 'block';

  // παίζει μουσική
  audio.play();

});
