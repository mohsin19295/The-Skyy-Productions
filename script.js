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
let init = 4;
let seeMore = document.getElementById("see_more");

seeMore.onclick = () => {
  let hiddenData = [...document.querySelectorAll(".display_none")];
  let i = init;
  while (i < init + 4) {
    hiddenData[i].style.display = "grid";

    // When last data occurs
    if (i == hiddenData.length - 1) {
      seeMore.disabled = "true";
      seeMore.innerHTML = "No more data";
      seeMore.style.color = "#f5f5f5";
      seeMore.style.cursor = "none";
      seeMore.style.background =
        "linear-gradient(to right, #161718, #161718a6)";
        break;
    }
    i++;
  }
  init += 4;
};
