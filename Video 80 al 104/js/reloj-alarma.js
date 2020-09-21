// Función para activar y desactivar el reloj.
export function actualizarHora(activarReloj, ocultarReloj) {
  const d = document;
  const reloj = document.querySelector(".reloj");
  let interval;

  d.addEventListener("click", (e) => {
    if (e.target.matches(activarReloj)) {
      interval = setInterval(function () {
        let hora = new Date().toLocaleTimeString();
        reloj.innerHTML = hora;
      }, 1000);
      d.getElementById("activarReloj").setAttribute("disabled", "");
    }

    if (e.target.matches(ocultarReloj)) {
      clearInterval(interval);
      reloj.innerHTML = "";
      d.getElementById("activarReloj").removeAttribute("disabled");
    }
  });
}

// Función para iniciar y desactivar la alarma.
export function alarmaDigital(iniciarAlarma, detenerAlarma) {
  const d = document;
  let $sonido = d.createElement("audio");
  d.addEventListener("click", (e) => {
    if (e.target.matches(iniciarAlarma)) {
      $sonido.setAttribute("src", "./sonido/alarma.mp3");
      $sonido.play();
      d.getElementById("iniciarAlarma").setAttribute("disabled", "");
    }

    if (e.target.matches(detenerAlarma)) {
      $sonido.pause();
      d.getElementById("iniciarAlarma").removeAttribute("disabled");
    }
  });
}
