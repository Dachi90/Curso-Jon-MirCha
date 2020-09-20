import hamburgerMenu from "./burger.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".fas", ".contenedor-menu", ".menu li a");
});
