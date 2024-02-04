const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnimage = document.querySelector("#nav-btn-img");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnimage.src = "./image/icons/nav-close.svg";
  } else {
    navBtnimage.src = "./image/icons/nav-open.svg";
  }
};
