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
$(document).ready(function () {
  $(".quote-container").slick({
    prevArrow:
      "<button type='button' class='click-prev pull-left'><i class = 'fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='click-next pull-right'><i class = 'fal fa-angle-right' aria-hidden='true'></i></button>",
  });
});
