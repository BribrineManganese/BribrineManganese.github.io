//Code provenant principalement de W3SCHOOLS et autres ressources

//Carroussel

let slideIndex = 1;

const slideshowMedia = window.matchMedia("(min-width: 700px)");

function updateArrows() {
  const previousArrow = document.querySelector(".prev");
  const nextArrow = document.querySelector(".next");

  if (previousArrow) {
    previousArrow.style.display = slideshowMedia.matches ? "" : "none";
  }

  if (nextArrow) {
    nextArrow.style.display = slideshowMedia.matches ? "" : "none";
  }
}

function plusSlides(n) {
  if (!slideshowMedia.matches) return;

  showSlides(slideIndex += n);
}

function showSlides(n) {
  if (!slideshowMedia.matches) return;

  const slides = document.getElementsByClassName("mySlides");

  if (slides.length === 0) return;

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  updateArrows();

  if (slideshowMedia.matches) {
    showSlides(slideIndex);
  }
});

window.addEventListener("resize", function () {
  updateArrows();

  if (slideshowMedia.matches) {
    showSlides(slideIndex);
  }
});

//Modale Image


document.addEventListener("DOMContentLoaded", () => {
  function isWideScreen() {
    return window.innerWidth > 600;
  }

  // Modal
  const modal = document.getElementById("myModal");
  const img = document.getElementById("myImg");
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");
  const closeButton = document.getElementsByClassName("close")[0];

  if (modal && img && modalImg && captionText && closeButton) {
    img.addEventListener("click", function () {
      if (!isWideScreen()) return;

      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    });

    closeButton.addEventListener("click", function () {
      if (!isWideScreen()) return;

      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // AG slideshow
  const slides = document.getElementsByClassName("myAGSlides");
  let myIndex = 0;
  let carouselTimer;

  function carousel() {
    if (!isWideScreen() || slides.length === 0) {
      return;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[myIndex].style.display = "block";
    myIndex = (myIndex + 1) % slides.length;

    carouselTimer = setTimeout(carousel, 2000);
  }

  function startCarousel() {
    if (isWideScreen() && !carouselTimer) {
      carousel();
    }
  }

  function stopCarousel() {
    clearTimeout(carouselTimer);
    carouselTimer = null;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "";
    }

    if (modal) {
      modal.style.display = "none";
    }
  }

  if (isWideScreen()) {
    startCarousel();
  }

  window.addEventListener("resize", () => {
    if (isWideScreen()) {
      startCarousel();
    } else {
      stopCarousel();
    }
  });
});
