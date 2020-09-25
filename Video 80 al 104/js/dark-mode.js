export default function darkMode(seccion, btn, dataDark) {
  const d = document;
  const $seccion = d.querySelectorAll(seccion);
  const $btn = d.querySelector(btn);
  const $botones = d.querySelectorAll(dataDark);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      $seccion.forEach((el) => {
        el.classList.toggle("darkMode");
      });
      $btn.classList.toggle("fa-sun");
      $botones.forEach((el) => {
        el.classList.toggle("botonesDark");
      });
    }
  });
}
