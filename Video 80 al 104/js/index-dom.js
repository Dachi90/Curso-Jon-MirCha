import hamburgerMenu from "./burger.js";
import { actualizarHora, alarmaDigital } from "./reloj-alarma.js";
import { shortcuts, moveBall } from "./eventos-teclado.js";
import { countdown } from "./countdown.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".fas", ".contenedor-menu", ".menu li a");
  actualizarHora("#activarReloj", "#ocultarReloj");
  alarmaDigital("#iniciarAlarma", "#detenerAlarma");
  countdown("01/01/2021 0:00 AM", "Feliz año nuevo", "#temporizador");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
