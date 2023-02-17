import MoveTo from "moveto";
import { tns } from "tiny-slider";

document.addEventListener("DOMContentLoaded", function () {
  const moveTo = new MoveTo();
  let els = document.getElementsByClassName("js-moveto");
  Array.prototype.forEach.call(els, function (el) {
    moveTo.registerTrigger(el);
  });

  const hamburgerMenu = document.querySelector('nav.td-nav button.hamburger-menu');
  const navLinks = document.querySelector('nav.td-nav ul');
  const socialIcons = document.querySelector('nav.td-nav ul.social-icons');

  function updateNav() {
    if (window.innerWidth > 675) {
      navLinks.classList.remove('show');
      socialIcons.classList.remove('show');
    }
  }

  hamburgerMenu.addEventListener('click', function () {
    navLinks.classList.toggle('show');
    socialIcons.classList.toggle('show');
  });

  window.addEventListener('resize', updateNav);
});

const slider = document.querySelector(".js-slider");
if (slider !== null) {
  tns({
    container: ".slider__container",
    items: 1,
    autoHeight: false,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3500,
    mode: "gallery",
    speed: 400,
    controls: false,
    nav: false,
  });
}

