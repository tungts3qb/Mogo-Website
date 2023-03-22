const menuHeader = document.querySelector(".header-menu");
const headerToggle = document.querySelector(".header-toggle");
const expandClass = "is-expand";
headerToggle.addEventListener("click", function () {
  menuHeader.classList.add(expandClass);
});
