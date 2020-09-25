export default function darkMode(seccion, btn, dataDark) {
  const d = document;
  const $seccion = d.querySelectorAll(seccion);
  const $btn = d.querySelector(btn);
  const $botones = d.querySelectorAll(dataDark);
  let ls = localStorage;

  /* function lightMode(){

  }

  function darkMode(){

  }
 */
  function swapMode() {
    $seccion.forEach((el) => {
      el.classList.toggle("darkMode");
    });
    $btn.classList.toggle("fa-sun");
    $botones.forEach((el) => {
      el.classList.toggle("botonesDark");
    });
    if ($btn.classList.contains("fa-sun")) {
      ls.setItem("theme", "dark");
    } else {
      ls.setItem("theme", "ligth");
    }
  }

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      swapMode();
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) {
      ls.setItem("theme", "light");
    }
    if (ls.getItem("theme") === "light") {
      swapMode();
    }
    if (ls.getItem("theme") === "dark") {
      swapMode();
    }
  });
}
