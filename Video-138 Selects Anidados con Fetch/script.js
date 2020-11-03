const d = document,
  $main = d.querySelector("main"),
  $estados = d.getElementById("estados"),
  $municipios = d.getElementById("municipios");

d.addEventListener("DOMContentLoaded", async (e) => {
  try {
    let res = await fetch("https://api-sepomex.hckdrk.mx/query/get_estados");
    let json = await res.json();
    let estados = json.response.estado;
    console.log(res, json, estados);

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    estados.forEach((el) => {
      let $option = d.createElement("option");
      $option.text = el;
      $option.value = el;

      $estados.add($option);
    });
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Ocurrió un problema";
    $main.innerHTML = `Error ${err.status}: ${message}`;
  }
});

$estados.addEventListener("change", async (e) => {
  try {
    let res = await fetch(`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${$estados.value}`);
    let json = await res.json();
    let municipios = json.response.municipios;
    console.log(res, json, municipios);

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    municipios.forEach((el) => {
      let $option = d.createElement("option");
      $option.text = el;
      $option.value = el;

      $municipios.add($option);
    });
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Ocurrió un problema";
    $main.innerHTML = `Error ${err.status}: ${message}`;
  }
});
