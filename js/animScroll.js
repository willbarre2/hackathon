const offsetInput = document.getElementById("circle");

window.addEventListener("scroll", function (e) {
  let offset = `${window.scrollY / 78}%`;
  document.documentElement.style.setProperty("--offset", offset);
});
