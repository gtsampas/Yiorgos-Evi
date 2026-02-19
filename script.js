const envelope = document.getElementById("envelope");

const music = document.getElementById("music");

envelope.addEventListener("click", () => {

envelope.classList.toggle("open");

music.play();

});
