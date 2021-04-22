const offsetInput = document.querySelector("#circle");

window.addEventListener("scroll", (e) => {
  let offset = `${window.scrollY / 77}%`;
  document.documentElement.style.setProperty("--offset", offset);
});
