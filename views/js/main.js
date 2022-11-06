window.addEventListener("DOMContentLoaded", () => {
  const menuOpen = document.getElementById("menuOpen"),
    menuClose = document.getElementById("menuClose"),
    navbar = document.querySelector(".navbar");

  menuOpen.addEventListener("click", () => {
    navbar.classList.add("navbar--active");
    console.log(navbar);
  });

  menuClose.addEventListener("click", () => {
    navbar.classList.remove("navbar--active");
  });
});
