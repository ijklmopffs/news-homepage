// const links = document.querySelector(".links");
// const hamburger = document.querySelector(".hamburger");

// hamburger.addEventListener("click", () => {
//   links.classList.toggle("active");
//   //   console.log("hi");
// });

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  console.log("first");
}
