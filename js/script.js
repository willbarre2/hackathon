const navBar = document.getElementById("nav-bar");

if (window.innerWidth <= 768) {
  navBar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
} else if (window.innerWidth > 768) {
  navBar.style.backgroundColor = "transparent";
}

window.addEventListener("scroll", (event) => {
  if (window.scrollY >= 100 || window.innerWidth <= 768) {
    navBar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
  } else if (window.scrollY < 100 || window.innerWidth > 768) {
    navBar.style.backgroundColor = "transparent";
  }
});

$(document).ready(function () {
  $("#btn-burger").click(function () {
    $("#nav-bar").toggleClass("isOpen");
  });

  $("#btn-burger").click(function (e) {
    e.preventDefault();
    $this = $(this);
    if ($this.hasClass("is-opened")) {
      $this.addClass("is-closed").removeClass("is-opened");
    } else {
      $this.removeClass("is-closed").addClass("is-opened");
    }
  });
});

/****** test clickTerre ****** */

window.addEventListener("click", (event) => {
  // console.log(event);

  const motte = document.createElement("div");
  motte.className = "clickTerre";
  motte.style.top = `${event.pageY - 15}px`;
  motte.style.left = `${event.pageX - 15}px`;
  document.body.appendChild(motte);

  setTimeout(() => {
    motte.remove();
  }, 1500);
});

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

// Validation email
// =========================

const submitBtn = document.querySelector(".submit-btn");
const emailInput = document.querySelector(".newsletters-email");
const errorMessage = document.querySelector(".error-message");
const modal = document.querySelector(".newsletters-modal-container");
const closeModalBtn = document.querySelector(".close-modal");
console.log(modal);

function closeModal() {
  modal.classList.add("hidden");
}
function showModal() {
  modal.classList.remove("hidden");
}

function ValidateEmail(mail) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    return true;
  }
  return false;
}

submitBtn.addEventListener("click", function (e) {
  // Reset default values
  e.preventDefault();
  errorMessage.classList.add("hidden");
  // Valid Email  -> Display Modal
  if (ValidateEmail(emailInput.value)) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    showModal();
    emailInput.value = "";
    emailInput.blur();
  } else {
    // email invalide: apparition du message d'erreur
    // Set time ouf pour si l'utilsateur a rentré une mauvaise adresse alors que le message d'erreur existe deja
    setTimeout(function () {
      errorMessage.classList.remove("hidden");
    }, 100);
  }
});

//Ferme le modal : clic, bouton X ou touche Echap
closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});
