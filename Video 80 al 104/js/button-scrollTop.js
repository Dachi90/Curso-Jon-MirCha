const d = document;

export function scrollTop(btn) {
  let boton = d.getElementById(btn);
  d.addEventListener("scroll", (e) => {
    if (window.scrollY >= 300) {
      boton.classList.add("showScrollTop");
    } else {
      boton.classList.remove("showScrollTop");
    }
  });
}
