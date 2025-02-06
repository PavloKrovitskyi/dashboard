"use strict"
const menuIcon = document.querySelector(".icon-menu")

menuIcon.addEventListener("click", function (e) {
  document.documentElement.classList.toggle("menu-open");
  if (e.target.closest('.menu__link')) {
    document.documentElement.classList.remove("menu-open");
  }
});


