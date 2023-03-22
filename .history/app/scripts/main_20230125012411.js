const menuToggle = document.querySelector(".header-menu");
const menuHeader = document.querySelector(".header-toggle");
const expandClass = "is-expand";
menuHeader.addEventListener("click", function () {
  menuToggle.classList.add(expandClass);
});
