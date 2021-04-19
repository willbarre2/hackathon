const navBar = document.getElementById("nav-bar");

window.addEventListener("scroll", (event) => {
  if (window.scrollY >= 300) {
    navBar.style.backgroundColor = "white";
  } else if (window.scrollY < 300) {
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
