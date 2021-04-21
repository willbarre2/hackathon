const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 100,
  speed: 400,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
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

// Reveal titles
const all_sections = document.querySelectorAll(".section-reveal");

const revealSectionImg = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    if (entry.target.classList.contains("section1"))
      entry.target.querySelector(".box-img-mobile").classList.add("reveal");
    entry.target.querySelector(".section-box-img").classList.add("reveal");
    observer.unobserve(entry.target);
  }
};

const sectionObserver = new IntersectionObserver(revealSectionImg, {
  root: null,
  threshold: 0.5,
});

all_sections.forEach(function (section) {
  sectionObserver.observe(section);
});
