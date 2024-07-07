// nav style on scroll
window.addEventListener("scroll", function () {
  var nav = document.getElementById("main-nav");
  if (window.scrollY > 100) {
    // Adjust the distance as needed
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
// Initialize Swiper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 40,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
