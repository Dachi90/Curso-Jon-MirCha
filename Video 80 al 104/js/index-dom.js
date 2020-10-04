import hamburgerMenu from "./burger.js";
import { actualizarHora, alarmaDigital } from "./reloj-alarma.js";
import { shortcuts, moveBall } from "./eventos-teclado.js";
import { countdown } from "./countdown.js";
import { scrollTop } from "./button-scrollTop.js";
import darkMode from "./dark-mode.js";
import responsiveMedia from "./responsive-js.js";
import responsiveTester from "./test-responsive.js";
import userDevideInfo from "./deteccion-dispositivos.js";
import conexion from "./detectar-conexion.js";
import detectarCam from "./detectar-camara.js";
import getGeolocation from "./geolocalizacion.js";
import busqueda from "./filtro-busqueda.js";
import sorteo from "./sorteo-digital.js";
import slider from "./responsive-slider.js";
import swapMenu from "./menu-desktop.js";
import scrollSpy from "./scroll-espia.js";
import videoInteligente from "./video-inteligente.js";
import formValidate from "./validaciones-formulario.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu("#btn", ".contenedor-menu", ".menu li a");
  actualizarHora("#activarReloj", "#ocultarReloj");
  alarmaDigital("#iniciarAlarma", "#detenerAlarma");
  countdown("01/01/2021 0:00 AM", "Feliz año nuevo", ".countdown");
  scrollTop("scrollTop");
  responsiveMedia("youtube", "(min-width: 900px)", `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank" rel="noopener"> Ver Video</a>`, `<iframe width="400px" height="250px" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  responsiveMedia(
    "gmaps",
    "(min-width: 900px)",
    `<a href="https://goo.gl/maps/4VXuqctYB96qpzpg7" target="_blank" rel="noopener"> Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95777.5288157847!2d2.0787279470992464!3d41.39476881460054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona!5e0!3m2!1ses!2ses!4v1601114224140!5m2!1ses!2ses" width="400px" height="250px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDevideInfo("user-device");
  detectarCam("camara");
  getGeolocation("mapa");
  busqueda(".card-filter", ".card");
  sorteo(".lista-sorteo", ".boton-sorteo");
  slider(".slider-slide", ".next", ".prev");
  swapMenu("(min-width: 1024px)");
  scrollSpy();
  videoInteligente();
  formValidate();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkMode(".secciones", "#darkModeBtn", "data-dark");
conexion();
