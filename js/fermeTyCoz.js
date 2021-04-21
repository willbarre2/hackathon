const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 100,
  speed: 400,
  keyboard: {
    enabled: true,
  },
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
