import hamburgerMenu from "./burger.js";
import { actualizarHora, alarmaDigital } from "./reloj-alarma.js";
import { shortcuts, moveBall } from "./eventos-teclado.js";
import { countdown } from "./countdown.js";
import { scrollTop } from "./button-scrollTop.js";
import darkMode from "./dark-mode.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu("#btn", ".contenedor-menu", ".menu li a");
  actualizarHora("#activarReloj", "#ocultarReloj");
  alarmaDigital("#iniciarAlarma", "#detenerAlarma");
  countdown("01/01/2021 0:00 AM", "Feliz año nuevo", ".countdown");
  scrollTop("scrollTop");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkMode(".secciones", "#darkModeBtn", "data-dark");
