// Header slider
export const swiperHeader = new Swiper('[data-swiper="headerSwiper"]', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  speed: 1000,
  simulateTouch: true,
  centeredSlides: false,
  spaceBetween: 20,
  roundLengths: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: false,
    dynamicBullets: true,
  },

  // Autoplay
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  //   stopOnLastSlide: false,
  // },

  // speed: 2500,
});

