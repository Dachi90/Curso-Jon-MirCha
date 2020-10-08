// ****************************************  Objeto XMLHttpRequest ****************************************

(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    //Validación para que hasta que la petición no se complete no haga nada.
    if (xhr.readyState != 4) return;

    //console.log(xhr);

    // Validación donde si recibimos una respuesta satisfactoria, es decir algún código 200, hacemos una cosa y en caso de recibir otro tipo de respuesta (error) hacemos otra.
    if (xhr.status >= 200 && xhr.status < 300) {
      //console.log("éxito");
      //console.log(xhr.responseText); // Aquí la respuesta se imprimirá en formato texto.

      let json = JSON.parse(xhr.responseText); // Aquí pasamos la respuesta en formato texto a formato json.
      //console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li"); // Creamos un elemento li
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; // A este elemento li le vamos agregando la propiedad name, email y phone del elemento que estamos en ese momento.
        $fragment.appendChild($li); // El elemento li al que le hemos agregado dichas propiedades lo añadimos como hijo al fragmento que hemos creado.
      });

      $xhr.appendChild($fragment); // Al elmento de nuestro html le añadimos nuestro fragmento ya terminado.
    } else {
      //console.log("error");
      // En la propiedad .statusText suele venir un texto explicativo del error, en este caso como esta API es de prueba viene vacío por lo que además le añadimos un mensaje general por si dicha propiedad esta vacía.
      let message = xhr.statusText || "Ocurrió un error";

      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();
})();
/*




*/
// ****************************************  API Fetch ****************************************

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      //console.log(res);
      return res.ok ? res.json() : Promise.reject(res); // si la respuesta de la petición fecth es OK devolvemos la respueta transformada en formato json. Si no enviamos la respuesta NO OK al catch para trabajar el error.
    })
    .then((json) => {
      //console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li"); // Creamos un elemento li
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; // A este elemento li le vamos agregando la propiedad name, email y phone del elemento que estamos en ese momento.
        $fragment.appendChild($li); // El elemento li al que le hemos agregado dichas propiedades lo añadimos como hijo al fragmento que hemos creado.
      });
      $fetch.appendChild($fragment); // Al elmento de nuestro html le añadimos nuestro fragmento ya terminado.
    })
    .catch((err) => {
      //console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
      //console.log("Esto se ejecutará independientemente del resultado de la promesa fetch.");
    });
})();
/*




*/
// ****************************************  API Fetch + Async-Await ****************************************

(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"), // Guardamos la respuesta de la petición fect en la variable res y con la palabra reservada await evitamos que se ejecute la siguiente línea de código hasta que esta termine.
        json = await res.json(); // Convertimos la respuesta de la petición fetch guardada en la variable res a formato json y la guardamos en la variable json y con la palabra reservada await evitamos que se ejecute la siguiente línea de código hasta que esta termine.
      console.log(res, json);

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li"); // Creamos un elemento li
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; // A este elemento li le vamos agregando la propiedad name, email y phone del elemento que estamos en ese momento.
        $fragment.appendChild($li); // El elemento li al que le hemos agregado dichas propiedades lo añadimos como hijo al fragmento que hemos creado.
      });
      $fetchAsync.appendChild($fragment); // Al elmento de nuestro html le añadimos nuestro fragmento ya terminado.
    } catch (err) {
      console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      console.log("Esto se ejecutará independientemente del try... catch");
    }
  }

  getData();
})();
