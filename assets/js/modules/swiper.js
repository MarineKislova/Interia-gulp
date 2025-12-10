import Swiper from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// Header slider
export const swiperHeader = new Swiper(".header__slider", {
  loop: true,
  simulateTouch: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: false,
    dynamicBullets: true,
  },

  // Autoplay
  autoplay: {
    delay: 5700,
    disableOnInteraction: false,
    stopOnLastSlide: false,
  },

  speed: 1700,
});
