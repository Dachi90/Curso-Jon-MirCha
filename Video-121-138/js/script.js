// ************************************** Solución Martín **************************************
/* let d = document;
let $html = d.querySelector("html");
let $body = d.querySelector("body");

d.addEventListener("click", async (e) => {
  if (e.target.matches(".home")) {
    try {
      let res = await fetch("index.html");
      let text = await res.text();
      //console.log(res, text);
      $html.innerHTML = text;
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
    } catch (err) {
      //console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $html.innerHTML = `<p><b>Error: ${err.status} ${message}</b></p>`;
    }
  }

  if (e.target.matches(".acerca")) {
    try {
      let res = await fetch("about.html");
      let text = await res.text();
      //console.log(res, text);
      $html.innerHTML = text;
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
    } catch (err) {
      console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $html.innerHTML = `<p><b>Error: ${err.status} ${message}</b></p>`;
    }
  }

  if (e.target.matches(".servicios")) {
    try {
      let res = await fetch("service.html");
      let text = await res.text();
      //console.log(res, text);
      $html.innerHTML = text;
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
    } catch (err) {
      //console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $html.innerHTML = `<p><b>Error: ${err.status} ${message}</b></p>`;
    }
  }
}); */

//************************************** Solución Jon **************************************
const d = document,
  $main = d.querySelector("main");

const getHTML = (options) => {
  let { url, succes, error } = options;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      let html = xhr.responseText;
      succes(html);
    } else {
      let message = xhr.statusText || "Ocurrió un error";
      error(`Error ${xhr.status}: ${message}`);
    }
  });

  xhr.open("GET", url);
  xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
  xhr.send();
};

d.addEventListener("DOMContentLoaded", (e) => {
  getHTML({
    url: "assets/home.html",
    succes: (html) => ($main.innerHTML = html),
    error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
  });
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".menu a")) {
    e.preventDefault();
    getHTML({
      url: e.target.href,
      succes: (html) => ($main.innerHTML = html),
      error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
    });
  }
});
