export default function swapMenu(mq) {
  const breakpoint = window.matchMedia(mq);
  const $contenedorSecciones = document.getElementById("contenedor-secciones");
  const $contenedorMenuDesktop = document.getElementById("contenedor-menu-desktop");
  const $btnMenuMobile = document.getElementById("btnMobile");
  const $scrollButton = document.getElementById("scrollTop");

  const menus = (e) => {
    if (e.matches) {
      $contenedorSecciones.classList.remove("contenedor-secciones-mobile");
      $contenedorSecciones.classList.add("contenedor-secciones-desktop");

      $contenedorMenuDesktop.classList.remove("ocultar-menu-desktop");
      $contenedorMenuDesktop.classList.add("contenedor-menu-desktop");

      $btnMenuMobile.classList.add("hideBtn");

      $scrollButton.classList.remove("scrollTop");
      $scrollButton.classList.add("scrollTopDesktop");
    } else {
      $contenedorSecciones.classList.remove("contenedor-secciones-desktop");
      $contenedorSecciones.classList.add("contenedor-secciones-mobile");

      $contenedorMenuDesktop.classList.remove("contenedor-menu-desktop");
      $contenedorMenuDesktop.classList.add("ocultar-menu-desktop");

      $btnMenuMobile.classList.remove("hideBtn");

      $scrollButton.classList.remove("scrollTopDesktop");
      $scrollButton.classList.add("scrollTop");
    }
  };

  breakpoint.addEventListener("change", menus);

  menus(breakpoint);
}
