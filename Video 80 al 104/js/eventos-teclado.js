const d = document;

export function shortcuts(e) {
  /* console.log(e);
  console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(e.altKey); */
  if (e.key === "a" && e.altKey) {
    alert("Has lanzado una alerta con el teclado");
  }

  if (e.key === "p" && e.altKey) {
    prompt("Promt lanzado con el teclado", "alt+p");
  }

  if (e.key === "c" && e.altKey) {
    confirm("Confirmación lanzada con el teclado");
  }
}

let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  //console.log(limitsBall);
  //console.log(limitsStage);

  switch (e.key) {
    //izquierda
    case "ArrowLeft":
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    //arriba
    case "ArrowUp":
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    //derecha
    case "ArrowRight":
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    //abajo
    case "ArrowDown":
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
