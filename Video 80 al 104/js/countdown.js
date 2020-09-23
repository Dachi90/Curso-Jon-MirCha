export function countdown(fecha, mensaje, contenedor) {
  const d = document;
  const limite = new Date(fecha).getTime(); // Fecha limite a la que queremos llegar expresada en milisegundos.
  const segundos = 1000; // Cantaidad de milisegundos dentro de un segundo.
  const minutos = segundos * 60; // Cantidad de milisegundos dentro de un minuto.
  const horas = minutos * 60; // Cantidad de milisegundos dentro de un hora.
  const dias = horas * 24; // Cantidad de milisegundos dentro de un día.

  let cuentaAtras = setInterval(() => {
    let ahora = new Date().getTime(); // Fecha en milisegundos de este instante.
    let duracion = limite - ahora; // Restamos la fecha límite en milisegundos menos el instante de ahora en milisegundos y nos da la duracion en milisegundos de la ceunta atrás.

    let diasRestantes = Math.floor(duracion / dias); // Dividimos la duración de la cuenta atrás en milisegundos por la cantidad de milisegundos que tiene un día y nos devuelve la cantidad de días que nos faltan.
    let horasRestantes = Math.floor((duracion % dias) / horas); // Del resto de la división anterior lo dividimos por la cantidad de milisegundos que tiene una hora y nos devuelve la cantidad de horas que nos faltan.
    let minutosRestantes = Math.floor((duracion % horas) / minutos); // Del resto de la división anterior lo dividimos por la cantidad de milisegundos que tiene un minuto y nos devuelve la cantidad de minutos que nos faltan.
    let segundosRestantes = Math.floor((duracion % minutos) / segundos); // Del resto de la división anterior lo dividimos por la cantidad de milisegundos que tiene un segundo y nos devuelve la cantidad de segundos que nos faltan.

    d.querySelector(contenedor).innerHTML = `<h2>Año nuevo en: </h2 <div>${diasRestantes}días ${horasRestantes}h ${minutosRestantes}min ${segundosRestantes}seg </div>`;

    if (duracion <= 0) {
      clearInterval(cuentaAtras);
      d.querySelector(".mensaje").innerHTML = mensaje; // Si la diferencía entre la fecha limite y el ahora es 0 (es decir ya termino la cuenta atrás) mostramos un mensaje, en este caso "Feliz año" que se lo pasamos por parámetro
    }
  }, 1000); // Imprimimos el resultado de los cálculos anteriores en un template string donde mostramos la cantidad de días, horas, minutos y segundos que nos faltan para llegar a la fecha límite. Y esto se va actualizando cada segundo por el setInterval.
}
