export default function actualizarHora(activarReloj, ocultarReloj, iniciarAlarma, detenerAlarma) {
  const d = document;
  const reloj = document.querySelector(".reloj");
  let interval;
  let $sonido = document.createElement("audio");

  d.addEventListener("click", (e) => {
    if (e.target.matches(activarReloj)) {
      interval = setInterval(function () {
        let fecha = new Date();
        let hora = fecha.toLocaleTimeString();
        reloj.innerHTML = hora;
      }, 1000);
      d.getElementById("activarReloj").setAttribute("disabled", "");
    }

    if (e.target.matches(ocultarReloj)) {
      clearInterval(interval);
      reloj.innerHTML = "";
      d.getElementById("activarReloj").removeAttribute("disabled");
    }

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
