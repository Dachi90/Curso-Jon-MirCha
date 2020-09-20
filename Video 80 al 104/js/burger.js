export default function hamburgerMenu(btn, menu, menuLink) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      d.querySelector(menu).classList.toggle("mostrar-menu");
      d.querySelector(btn).classList.toggle("fa-times-circle");
    }

    if (e.target.matches(menuLink)) {
      d.querySelector(menu).classList.remove("mostrar-menu");
      d.querySelector(btn).classList.remove("fa-times-circle");
    }
    console.log(e.target);
  });
}
