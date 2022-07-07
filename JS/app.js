const logo = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

logo.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
});
