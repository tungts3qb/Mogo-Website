const menuHeader = document.querySelector(".header-menu");
const headerToggle = document.querySelector(".header-toggle");
const expandClass = "is-expand";
headerToggle.addEventListener("click", function () {
  menuHeader.classList.add(expandClass);
});

window.addEventListener("click", function (e) {
  if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
    menuHeader.classList.remove(expandClass);
  }
});

// slick slider
$(document).ready(function(){
  $('.your-class').slick({
    setting-name: setting-value
  });
});
