const hamburguer=document.querySelector(".hamburguer");
const navMenu= document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburguer.addEventListener("click",movileView);

function movileView(){
  navMenu.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
