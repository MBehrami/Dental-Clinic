const navButton = document.querySelector(".btn-mobile-nav");
const navHeader = document.querySelector(".header");

navButton.addEventListener("click", function () {
    navHeader.classList.toggle("nav-open");
});
