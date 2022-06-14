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
  let hiddenData = [...document.querySelectorAll(".work_section .work_wrapper .work_grid .work_card")];
  console.log('hiddenData:', hiddenData.length)
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

// For Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// For smooth paading top after clicking on any section
let navigationHeight = document.querySelector("nav").offsetHeight
document.documentElement.style.setProperty("--scroll-padding", `${navigationHeight}px`)


// For single user timer
if (localStorage.getItem("count_timer")) {
  count_timer = localStorage.getItem("count_timer");
} else {
  count_timer = 86400;
}

function returnValue(num) {
  let hours = Math.floor(num / 3600);
  num -= hours * 3600;
  let minutes = Math.floor(num / 60);
  let seconds = num - minutes * 60;

  if (hours < 10) {
      hours = "0" + hours;
  }
  if (minutes < 10) {
      minutes = "0" + minutes;
  }
  if (seconds < 10) {
      seconds = "0" + seconds;
  }
  return `${hours}h : ${minutes}m : ${seconds}s`
}

function countDownTimer() {
  document.getElementById("timer").innerHTML = returnValue(count_timer)

  if (count_timer <= 0) {
      document.getElementById("timer").innerHTML = "Sorry Offer expired"
  } else {
      count_timer = count_timer - 1;
      // returnValue(count_timer-1)
      localStorage.setItem("count_timer", count_timer);
      setTimeout("countDownTimer()", 1000);
  }
}
setTimeout("countDownTimer()", 1000);

// Refering the course-page
let coursePageBtn = document.getElementById("check-course-btn");
coursePageBtn.addEventListener("click", function(){
  window.location.href = "./course/course.html"
})