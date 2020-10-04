const d = document;

export default function formValidate() {
  const $nombre = d.getElementById("nombre");
  const $email = d.getElementById("email");
  const $asunto = d.getElementById("asunto");
  const $comentario = d.getElementById("comentario");
  const $btnFormulario = d.getElementById("btnFormulario");

  const error = (input, mensaje) => {
    const id = input.id;
    //console.log(id);
    const mensajeError = d.querySelector(`#${id} + p`);
    //console.log(mensajeError);
    mensajeError.classList.add("campoNoOkShow");
    mensajeError.innerHTML = mensaje;

    setTimeout(() => {
      mensajeError.classList.remove("campoNoOkShow");
    }, 3000);
  };

  const valido = (input) => {
    input.classList.add("campoOk");
    setTimeout(() => {
      input.classList.remove("campoOk");
    }, 3000);
  };

  const validaNombre = () => {
    if ($nombre.value === "") {
      error($nombre, "Introduzca un nombre por favor.");
    } else if ($nombre.value.length < 3 && $nombre.value.length > 0) {
      error($nombre, "El nombre debe tener al menos 3 letras.");
    } else {
      valido($nombre);
    }
  };

  const validaEmail = () => {
    const regExpEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    if ($email.value === "") {
      error($email, "Introduzca un email por favor.");
    } else if (!regExpEmail.test($email.value)) {
      console.log(regExpEmail.test($email.value));
      error($email, "Introduzca un email válido por favor.");
    } else {
      valido($email);
    }
  };

  const validaAsunto = () => {
    if ($asunto.value === "") {
      error($asunto, "Introduzca un asunto.");
    } else if ($asunto.value.length < 3 && $asunto.value.length > 0) {
      error($asunto, "Introduzca un asunto válido porfavor.");
    } else {
      valido($asunto);
    }
  };

  const validaComentario = () => {
    if ($comentario.value === "") {
      error($comentario, "Introduzca su comentario.");
    } else if ($comentario.value.length < 3 && $comentario.value.length > 0) {
      error($comentario, "Introduzca un comentario válido porfavor.");
    } else {
      valido($comentario);
    }
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(`#${$btnFormulario.id}`)) {
      e.preventDefault();
      validaNombre();
      validaEmail();
      validaAsunto();
      validaComentario();
    }
  });

  d.addEventListener("focusout", (e) => {
    if (e.target.matches(`#${$nombre.id}`)) validaNombre();
  });
  d.addEventListener("focusout", (e) => {
    if (e.target.matches(`#${$email.id}`)) validaEmail();
  });
  d.addEventListener("focusout", (e) => {
    if (e.target.matches(`#${$asunto.id}`)) validaAsunto();
  });
  d.addEventListener("focusout", (e) => {
    if (e.target.matches(`#${$comentario.id}`)) validaComentario();
  });
}
