const $menu = document.getElementById("contenedor-menu"),
  $btn = document.getElementById("btn"),
  $itemMenu = document.getElementById("menu"),
  $btnImg = $btn.children[0];

let estado = true;

//Función para abrir y cerrar el menú haciendo click en el botón y cambiar la imagen.
function toogleMenu(menu) {
  if (estado === true) {
    estado = false;
    menu.classList.add("mostrar-menu");
    $btnImg.classList.replace("fa-bars", "fa-times-circle");
  } else {
    estado = true;
    menu.classList.remove("mostrar-menu");
    $btnImg.classList.replace("fa-times-circle", "fa-bars");
  }
}
// Evento que sobre el botón para llamar a la función de abrir y cerrar el menú.
$btn.addEventListener("click", (e) => {
  toogleMenu($menu);
});

// Función para cerrar el menú cuando haga click en alguno de los enlaces.
function cerrarMenu(menu) {
  if (estado === false) {
    estado = true;
    menu.classList.remove("mostrar-menu");
    $btnImg.classList.replace("fa-times-circle", "fa-bars");
  }
}

// Evento soobre los el menú para cerrarlo cuando se haga click en alguno de ellos.
$itemMenu.addEventListener("click", (e) => {
  cerrarMenu($menu);
});
