const envelope = document.getElementById('envelope');

envelope.addEventListener('click', () => {
  envelope.classList.add('open');
});

window.addEventListener('scroll', () => {
  envelope.classList.add('open');
});