import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Header slider
export const swiperHeader = new Swiper('[data-swiper="headerSwiper"]', {
  modules: [Navigation, Pagination, Autoplay],
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  speed: 1000,
  simulateTouch: false,
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
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    stopOnLastSlide: false,
  },

  speed: 4000,
});

// Header slider
export const swiperSectionEight = new Swiper('[data-swiper="sectionEightSwiper"]', {
  modules: [Navigation, Pagination],
 loop: true,
    simulateTouch: true,
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 4,

    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10, slidesPerGroup: 1 },
      425: { slidesPerView: 2, spaceBetween: 10, slidesPerGroup: 2 },
      768: { slidesPerView: 3, spaceBetween: 10, slidesPerGroup: 2 },
      1024: { slidesPerView: 4, spaceBetween: 10, slidesPerGroup: 4 },
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});