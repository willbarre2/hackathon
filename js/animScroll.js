const offsetInput = document.querySelector("#circle");

window.addEventListener("scroll", (e) => {
  let offset = `${window.scrollY / 42}%`;
  document.documentElement.style.setProperty("--offset", offset);
});
