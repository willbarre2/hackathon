const navBar = document.getElementById("nav-bar");

if (window.innerWidth <= 768) {
  navBar.style.backgroundColor = "white";
} else if (window.innerWidth > 768) {
  navBar.style.backgroundColor = "transparent";
}

window.addEventListener("scroll", (event) => {
  if (window.scrollY >= 100 || window.innerWidth <= 768) {
    navBar.style.backgroundColor = "white";
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

window.addEventListener('click',(event) => {
  // console.log(event);

  const motte = document.createElement('div');
  motte.className ='clickTerre'
  motte.style.top = `${event.pageY - 13}px`;
  motte.style.left = `${event.pageX - 13}px`;
  document.body.appendChild(motte);

  setTimeout(() => {
    motte.remove()
  },1500)
})