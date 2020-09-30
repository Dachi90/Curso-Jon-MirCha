export default function slider(contenedor, btnNext, btnPrev) {
  const diapositivas = document.querySelectorAll(contenedor);
  let contador = 0;

  const next = function next() {
    if (contador === diapositivas.length - 1) {
      diapositivas[contador].classList.remove("active");
      contador = 0;
      diapositivas[contador].classList.add("active");
    } else {
      diapositivas[contador].classList.remove("active");
      contador++;
      diapositivas[contador].classList.add("active");
    }
  };

  const prev = function prev() {
    if (contador === 0) {
      diapositivas[contador].classList.remove("active");
      contador = diapositivas.length - 1;
      diapositivas[contador].classList.add("active");
    } else {
      diapositivas[contador].classList.remove("active");
      contador--;
      diapositivas[contador].classList.add("active");
    }
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches(btnNext)) {
      e.preventDefault();
      next();
      clearInterval(autoplay);
    }
    if (e.target.matches(btnPrev)) {
      e.preventDefault();
      prev();
      clearInterval(autoplay);
    }
  });

  const autoplay = setInterval(() => {
    next();
  }, 3000);
}
