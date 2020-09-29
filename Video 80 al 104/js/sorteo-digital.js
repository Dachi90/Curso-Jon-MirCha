export default function sorteo(lista, boton) {
  const $lista = document.querySelectorAll(`${lista}>li`);
  console.log($lista);
  let lenguajes = [];

  $lista.forEach((el) => {
    lenguajes.push(el.textContent);
  });
  console.log(lenguajes);

  document.addEventListener("click", (e) => {
    if (e.target.matches(boton)) {
      let aleatorio = Math.floor(Math.random() * lenguajes.length);
      console.log(lenguajes[aleatorio]);
      alert(lenguajes[aleatorio]);
      $lista[aleatorio].classList.add("ganador-sorteo");
      setTimeout(() => {
        $lista[aleatorio].classList.remove("ganador-sorteo");
      }, 1000);
    }
  });
}

// Solución de Jon MirCha

/* export default function draw(btn, selector) {
  const getWiner = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random];

    console.log($players, random, winner);

    return `El ganador es: $[winner.textContent]`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWiner(selector);
      alert(result);
      console.log(result);
    }
  });
}
 */

// Modificando un poco la función getWiiner() podemos adaptarla para hacer sorteos entre comentarios de un video de youtube, twitter, facebook o alguna otra red social. Solo tenemos que analizar un poco el código HTML del sitio donde queremos hacer el sorteo para adaptar el selector que le pasamos por parametro a la función.

/* const getWinerComment = (selector) => {
  const $players = document.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length),
    winner = $players[random];

  console.log($players, random, winner);

  return `El ganador es: $[winner.textContent]`;
};

// En este caso Jon nos da un ejemplo con un comentario de un video de youtube. Analizando el códig html vemos que el comentario completo esta dentro de la etiqueta ytd-comment-thread-rederer la cúal tiene dentro otra con un id de #author-text y dentro de esta un span donde encontramos el nombre del usuario que ha escrito dicho comentario. Con esto podemos extraer el nombre d eun comentario aleatorio y mostrar el nombre del ganador.

getWinerComment("ytd-comment-thread-rederer #author-text span") */
