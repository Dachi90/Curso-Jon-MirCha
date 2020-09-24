export default function darkMode(seccion, btn) {
  const d = document;
  const $seccion = d.querySelectorAll(seccion);
  const $btn = d.querySelector(btn);
  const $botonMenuDark = d.querySelector(".btn");
  const $botonScrollDark = d.querySelector(".scrollTop");
  const $botonDarkDark = d.querySelector(".darkModeBtn");

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      $seccion.forEach((el) => {
        el.classList.toggle("darkMode");
      });
      $btn.classList.toggle("fa-sun");
      $botonMenuDark.classList.toggle("botonesDark");
      $botonScrollDark.classList.toggle("botonesDark");
      $botonDarkDark.classList.toggle("botonesDark");
    }
  });
}
/* $seccion.classList.toggle("darkMode"); */
