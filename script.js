const menu = document.querySelector("#menu-bar");
const menuLinks = document.querySelector("#nav_menu");
const navLogo = document.querySelector("#nav_logo");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};
menu.addEventListener("click", mobileMenu);

// Adding 'Click Event' to menu items
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 961 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};
menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

// See more button
let seeMore = document.getElementById("see_more");
let init = 3;

seeMore.onclick = () => {
  let hiddenData = [...document.querySelectorAll(".work_section .works_wrapper .work_card")];
  for (var i = init; i < init + 3; i++) {
    hiddenData[i].style.display = "grid";

    // When last data occurs
    if (i == hiddenData.length - 1) {
      seeMore.style.display = "none";
      break;
    }
  }
  init += 3;
};
