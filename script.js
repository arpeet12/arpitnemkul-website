const toggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-part2");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
const nav = document.querySelector("nav");

nav.addEventListener("mouseenter", () => {
  nav.classList.add("open");
});

nav.addEventListener("mouseleave", () => {
  nav.classList.remove("open");
});