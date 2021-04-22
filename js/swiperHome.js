// Slider Recettes

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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

var btns = document.querySelectorAll(".slider-btn");
var paginationWrapper = document.querySelector(".pagination-wrapper");
var bigDotContainer = document.querySelector(".big-dot-container");
var littleDot = document.querySelector(".little-dot");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", btnClick);
}

function btnClick() {
  if (this.classList.contains("swiper-button-prev")) {
    paginationWrapper.classList.add("transition-prev");
  } else {
    paginationWrapper.classList.add("transition-next");
  }

  var timeout = setTimeout(cleanClasses, 500);
}

function cleanClasses() {
  if (paginationWrapper.classList.contains("transition-next")) {
    paginationWrapper.classList.remove("transition-next");
  } else if (paginationWrapper.classList.contains("transition-prev")) {
    paginationWrapper.classList.remove("transition-prev");
  }
}
