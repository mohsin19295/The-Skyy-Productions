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

// For Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// For smooth pading top after clicking on any section
let navigationHeight = document.querySelector("nav").offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  `${navigationHeight}px`
);

// For single user timer
var interval = 86400000;

function reset() {
  localStorage.endTime = +new Date() + interval;
}

if (!localStorage.endTime) {
  reset();
}

setInterval(function () {
  var remaining = localStorage.endTime - new Date().getTime();

  let sec = Math.floor((remaining / 1000) % 60);
  let min = Math.floor((remaining / 1000 / 60) % 60);
  let hour = Math.floor((remaining / 1000 / 60 / 60) % 24);

  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }

  if (remaining >= 0) {
    document.querySelector("#timer").innerHTML = `${hour}: ${min}: ${sec}`;
  } else {
    document.querySelector("#timer").innerHTML = "Sorry Offer expired";
  }
}, 100);

// Refering the course-page
let coursePageBtn = document.getElementById("check-course-btn");
coursePageBtn.addEventListener("click", function () {
  window.location.href = "./course/course.html";
});

// For YouTube Data
let key = "AIzaSyDPtfOgWwF6enWJGfnsohAsS9546sQNUkc";
let id = "UCytbmgRnooFVMIQ84CvGLvA"
// let key = config.API_KEY;
// let id = config.CHANNEL_ID;

let video = document.querySelector(".work_card");
let yt_box = document.querySelector(".yt_box");

let loadmoreDiv = document.createElement("button");
loadmoreDiv.className = "see_more";
loadmoreDiv.innerHTML = "See More";

const myFun = () => {
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&maxResults=10&order=viewCount&key=${key}`;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log('res:', res)
      res.items.map((e, i) => {
        let single = document.createElement("div");
        single.className = "youtube_video";
        let style = document.createElement("div");
        style.className = "youtube_style";

        let logo = document.createElement("img");
        logo.src = "images/logo.jpg";
        let p = document.createElement("p");
        p.innerHTML = e.snippet?.title;
        style.append(logo, p);

        let iframeDiv = document.createElement("div");
        iframeDiv.className = "iframeDiv";
        let iframe = document.createElement("iframe");
        iframe.frameBorder = 0;
        iframe.border = 0;
        iframe.cellspacing = 0;
        iframe.src = `https://www.youtube.com/embed/${e.id?.videoId}`;
        iframeDiv.append(iframe);

        if (i > 2) {
          single.classList.add("hidden");
        }

        single.append(iframeDiv, style);
        video.append(single);
        yt_box.append(video, loadmoreDiv);
      });
    })
    .catch((err) => console.log(err));
};

let init = 3;
loadmoreDiv.onclick = () => {
  let total = [...document.querySelectorAll(".work_card .youtube_video")];

  for (var i = init; i < init + 3; i++) {
    total[i].style.display = "inline-block";
    if (i == total.length - 1) {
      loadmoreDiv.style.display = "none";
      break;
    }
  }
  init += 3;
};
myFun();
