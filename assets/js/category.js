// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".cat-next",
    prevEl: ".cat-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1400: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
