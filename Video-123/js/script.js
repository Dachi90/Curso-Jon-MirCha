const $header = document.getElementById("cabecera");
const $footer = document.getElementById("footer");

const cabecera = async () => {
  try {
    let res = await fetch("assets/cabecera.html");
    let html = await res.text();
    //console.log(res, html);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    $header.outerHTML = html;
  } catch (err) {
    let message = err.statusText || "Ocurrió un error";
    $header.innerHTML = `Error ${err.status}: ${message}`;
    //console.log(`Error ${err.status}: ${message}`);
  }
};

const pie = async () => {
  try {
    let res = await fetch("assets/pie.html");
    let html = await res.text();
    //console.log(res, html);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    $footer.outerHTML = html;
  } catch (err) {
    let message = err.statusText || "Ocurrió un error";
    $footer.innerHTML = `Error ${err.status}: ${message}`;
    //console.log(`Error ${err.status}: ${message}`);
  }
};
document.addEventListener("DOMContentLoaded", cabecera);
document.addEventListener("DOMContentLoaded", pie);
