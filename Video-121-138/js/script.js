let d = document;
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
});
