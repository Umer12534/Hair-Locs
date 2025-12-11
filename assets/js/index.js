const heroSwiper1 = new Swiper(".heroSwiper1", {
  loop: true,
  spaceBetween: 0,
  speed: 1000,
  autoplay: {
    delay: 500000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 1025px (Desktop)
    1025: {
      spaceBetween: 30,
    },
  },
  // Add keyboard navigation
  keyboard: {
    enabled: true,
  },
  // Add mousewheel navigation
  mousewheel: {
    forceToAxis: true,
  },
});

const heroSwiper2 = new Swiper(".heroSwiper2", {
  loop: true,
  spaceBetween: 30,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".heroSwiper2 .swiper-pagination",
    clickable: true, // this makes the dots clickable
  },
});

// all categories slider
var swiper = new Swiper(".custom-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 900,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

// banner
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  speed: 2000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
