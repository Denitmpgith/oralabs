let slideIndex = 1;
let intervalId;

showSlides(slideIndex); // show the first slide
startAutoSlide(); // start the automatic slide

function plusSlides(n) {
  clearInterval(intervalId);
  showSlides((slideIndex += n));
  startAutoSlide();
}

function currentSlide(n) {
  clearInterval(intervalId);
  showSlides((slideIndex = n));
  startAutoSlide();
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    showSlides((slideIndex += 1));
  }, 5000);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
