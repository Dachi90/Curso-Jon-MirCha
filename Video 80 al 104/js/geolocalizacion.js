const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $mapa = d.getElementById(id);

  if (!n.geolocation) {
    $mapa.innerHTML = "<p>Tu navegador no soporta el sistema de gelocalización, porfavor utilize un navegador moderno. </p>";
    return;
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const succes = (position) => {
    let coords = position.coords;
    //console.log(position);

    $mapa.innerHTML = `
    <p>Tu posición actual es:</p>
    <ul>
      <li>Latitud: <b>${coords.latitude}</b></li>
      <li>Longitud: <b>${coords.longitude}</b></li>
      <li>Precisión: <b>${coords.accuracy}</b> metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `;
  };

  const error = (err) => {
    $mapa.innerHTML = `<p><mark>Error ${err.code}: ${err.message} </mark></p>`;
    //console.log(`Error ${err.code}: ${err.message}`);
  };

  n.geolocation.getCurrentPosition(succes, error, options);
}
