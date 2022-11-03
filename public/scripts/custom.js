var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 100) {
    nav.classList.add("scroll");
    nav.classList.add("navbar-light", "bg-white", "shadow");
  } else {
    nav.classList.remove("scroll");
    nav.classList.remove("navbar-light", "bg-white", "shadow");
  }
});

var swiper = new Swiper(".carousel-container__content", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  autoHeight: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});
