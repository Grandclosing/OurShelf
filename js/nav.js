let hamburgerOpen = false;

function toggleHamburger(elem) {
  hamburgerOpen = !hamburgerOpen;
  elem.classList.toggle("is-active");

  let mobileMenu = document.getElementsByClassName('js-nav-toggle')[0];
  mobileMenu.style.display = hamburgerOpen ? "block" : "none";
}
