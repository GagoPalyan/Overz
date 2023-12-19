const burgerMenu = document.querySelector(".burgerMenu");
const hiddenMenu = document.querySelector(".hiddenMenu");
const burgerMenuActive = document.querySelector(".hiddenMenu nav");
let menu = false;

burgerMenu.addEventListener("click", () => {
  if (menu == false) {
    hiddenMenu.style.display = "flex";
    menu = true;
  } else {
    hiddenMenu.style.display = "none";
    menu = false;
  }
});
