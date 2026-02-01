const envelope = document.getElementById('envelope');

envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  createConfetti(); // optional for premium feel
});

// Optional confetti function
function createConfetti() {
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.position = 'absolute';
    confetti.style.width = `${Math.random()*8+4}px`;
    confetti.style.height = `${Math.random()*8+4}px`;
    confetti.style.background = `hsl(${Math.random()*360}, 80%, 60%)`;
    confetti.style.left = `${Math.random()*350}px`;
    confetti.style.top = `0px`;
    confetti.style.opacity = Math.random()+0.5;
    confetti.style.borderRadius = '50%';
    document.body.appendChild(confetti);

    // Animate falling
    const fall = confetti.animate([
      { transform: `translateY(0) rotate(${Math.random()*360}deg)` },
      { transform: `translateY(400px) rotate(${Math.random()*720}deg)` }
    ], {
      duration: 3000 + Math.random()*2000,
      iterations: 1,
      easing: 'ease-out'
    });

    fall.onfinish = () => confetti.remove();
  }
}
