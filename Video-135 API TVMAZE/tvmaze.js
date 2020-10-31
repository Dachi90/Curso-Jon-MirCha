/* const d = document,
  $main = d.getElementById("main");

const busqueda = async () => {
  let $input = d.getElementById("search").value;
  //console.log($input);

  try {
    const res = await fetch(`http://api.tvmaze.com/search/shows?q=${$input}`);
    const json = await res.json();
    console.log(res, json);

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    for (let i = 0; i < json.length; i++) {
      let image;

      json[i].show.image === null ? (image = "./no-image.png") : (image = json[i].show.image.medium);

      $main.innerHTML += `
      <figure>
      <h3>${json[i].show.name}</h3>
      ${json[i].show.summary}
      <img src="${image}" alt="${json[i].show.name}"/>
      </figure>
    `;
    }
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Ocurrió un problema en su busqueda";
    $main.innerHTML = `Error ${err.status}: ${message}`;
  }
};

d.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    $main.innerHTML = "";
    busqueda();
  }
}); */

/*



*/
// ***************************** Solución Jon

const d = document,
  $shows = d.getElementById("shows"),
  $template = d.getElementById("show-template").content,
  $fragment = d.createDocumentFragment();

d.addEventListener("keypress", async (e) => {
  if (e.target.matches("#search")) {
    if (e.key === "Enter") {
      try {
        $shows.innerHTML = `<img class="loader" src="./loader.svg" alt="Cargando..." />`;

        let query = e.target.value.toLowerCase(),
          api = `http://api.tvmaze.com/search/shows?q=${query}`,
          res = await fetch(api),
          json = await res.json();

        console.log(api, res, json);

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        if (json.length === 0) {
          $shows.innerHTML = `<h2> No existen resultados de shows para el criterio de busqueda : <mark>${query}</mark></h2>`;
        } else {
          json.forEach((el) => {
            $template.querySelector("h3").textContent = el.show.name;
            $template.querySelector("div").innerHTML = el.show.summary ? el.show.summary : "Sin descripción";

            $template.querySelector("img").src = el.show.image ? el.show.image.medium : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
            $template.querySelector("img").alt = el.show.name;
            $template.querySelector("img").style.maxWidth = "100%";

            $template.querySelector("a").href = el.show.url ? el.show.url : "#";
            $template.querySelector("a").target = el.show.url ? "_blank" : "_self";
            $template.querySelector("a").textContent = el.show.url ? "Ver más..." : "";

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
          });
          $shows.innerHTML = "";
          $shows.appendChild($fragment);
        }
      } catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrió un problema en su busqueda";
        $shows.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
      }
    }
  }
});
