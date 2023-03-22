// const menuToggle = document.querySelector(".menu-toggle");
const menuHeader = document.querySelector(".header-toggle");
const expandClass = "is-expand";
menuHeader.addEventListener("click", function () {
  menuHeader.classList.add(expandClass);
});
