const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 50,
  speed: 600,
  initialSlide: 0,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
