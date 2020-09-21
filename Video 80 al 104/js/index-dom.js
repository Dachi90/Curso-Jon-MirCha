import hamburgerMenu from "./burger.js";
import { actualizarHora, alarmaDigital } from "./reloj-alarma.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".fas", ".contenedor-menu", ".menu li a");
  actualizarHora("#activarReloj", "#ocultarReloj");
  alarmaDigital("#iniciarAlarma", "#detenerAlarma");
});
