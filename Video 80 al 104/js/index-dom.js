import hamburgerMenu from "./burger.js";
import actualizarHora from "./reloj-alarma.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".fas", ".contenedor-menu", ".menu li a");
});

d.addEventListener("DOMContentLoaded", (e) => {
  actualizarHora("#activarReloj", "#ocultarReloj", "#iniciarAlarma", "#detenerAlarma");
});
