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
