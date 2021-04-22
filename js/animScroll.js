const offsetInput = document.querySelector("#circle");

window.addEventListener("scroll", (e) => {
  let offset = `${window.scrollY / 78}%`;
  document.documentElement.style.setProperty("--offset", offset);
});
