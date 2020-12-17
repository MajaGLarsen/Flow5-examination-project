
// Picture slider to front page
var slideIndex = 1;
var timeoutHandle;
showSlides(slideIndex, 0);

// Next/previous buttons, left and right
function plusSlides(n, t) {
  showSlides(slideIndex += n, t);
  clearTimeout(timeoutHandle);
  timeoutHandle = setTimeout(function() {
    showSlides(slideIndex, 0);
  }, 2000)// Change image every 2 seconds
}

// Picture slider
function currentSlide(n, t) {
  showSlides(slideIndex = n, t);
}

function showSlides(n, t) {
  var i;
  var slides = document.getElementsByClassName("my-slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  if (t==0) {
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    timeoutHandle = setTimeout(function() {
      showSlides(slideIndex, 0);
    }, 4000)// Change image every 2 seconds
  }

  // Show first picture when loading site
  slides[slideIndex-1].style.display = "block";
}

