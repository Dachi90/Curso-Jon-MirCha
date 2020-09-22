export function countdown(fecha, mensaje, contenedor) {
  const d = document;
  const limite = new Date(fecha).getTime();
  const segundos = 1000;
  const minutos = segundos * 60;
  const horas = minutos * 60;
  const dias = horas * 24;

  setInterval(() => {
    const ahora = new Date().getTime();
    const duracion = limite - ahora;

    const diasRestantes = Math.floor(duracion / dias);
    const horasRestantes = Math.floor((duracion % dias) / horas);
    const minutosRestantes = Math.floor((duracion % horas) / minutos);
    const segundosRestantes = Math.floor((duracion % minutos) / segundos);

    if (duracion === 0) {
      d.querySelector(".mensaje").innerHTML = mensaje;
    } else {
      d.querySelector(contenedor).textContent = `${diasRestantes}días ${horasRestantes}h ${minutosRestantes}min ${segundosRestantes}seg`;
    }
  }, 1000);
}
