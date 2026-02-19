const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const onepage = document.getElementById("onepage");
const audio = document.getElementById("music");


openBtn.addEventListener("click", () => {

  // play music
  audio.play();

  // fade out cover
  cover.style.opacity = "0";

  setTimeout(() => {

    cover.style.display = "none";

    onepage.style.opacity = "1";

    startScrollAnimations();

  }, 1500);

});



function startScrollAnimations(){

  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        entry.target.classList.add("show");

      }

    });

  });

  elements.forEach(el => observer.observe(el));

}
