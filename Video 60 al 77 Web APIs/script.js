//          *********************************************** Video 60 WEB APIs ***********************************************

// Ejemplo muy sencillo de una de las tantas WEB APIs. En este caso speechSynthesis reproduce un texto en un sonido.
/* let texto = "Hola soy tu amigo y docente digital Jonathan MirCha";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto); */

//          *********************************************** Video 61 DOM Introducción ***********************************************

/* console.log("********** Elementos del Documento **********");
// window es el objeto padre del cuál cuelgan todas las APIs del navegador, en este caso trabajaremos con el document que es el que nos permite trabajar con el código HTML. Todo lo que cuelga del objeto padre window no hace falta poner window.document con solo poner document funciona correctamente.
console.log(window.document);
console.log(document);

// Tambien podemos ir accediendo a nodos especificos del document
console.log(document.head);
console.log(document.body);

// Para acceder al nodo html sería .documentElement
console.log(document.documentElement);

//Tambien podemos acceder al document type ya que queda fuera del html.
console.log(document.doctype);

// Y así con diferentes nodos y más de los que mstramos a continuación.
console.log(document.charset);
console.log(document.title);
console.log(document.links); // En este caso no entraría ningun elemento ya que en este ejemplo no tenemos.
console.log(document.images); // En este caso no entraría ningun elemento ya que en este ejemplo no tenemos.
console.log(document.forms); // En este caso no entraría ningun elemento ya que en este ejemplo no tenemos.
console.log(document.styleSheets); // En este caso no entraría ningun elemento ya que en este ejemplo no tenemos.
console.log(document.scripts); // En nuestro ejemplo nos muestra dos porque tenemos la extension de Live Server en CS Code el cual inyecta un script en el documento html. */
/* 





*/
//          *********************************************** Video 62 DOM:Nodos, elementos y selectores ***********************************************

/* console.log(document.getElementsByTagName("li")); // Este método ha sido remplazado por .querySelector("")
console.log(document.getElementsByClassName("card")); // Este método ha sido remplazado por .querySelector("")
console.log(document.getElementsByTagName("nombre")); // Este método ha sido remplazado por .querySelector("")
console.log(document.getElementById("menu"));

// Para el método querySelector y querySelectorAll si hay que poner el punto en un clase o el gato en los id, ya que aquí no se esecifica si estamos buscando una clase o un id o otro tipo de elemento.

// El método querySelector te devuelve el primer selector del tipo que hayas especificado del codumento html.
console.log(document.querySelector("a"));
console.log(document.querySelector(".card")); // Nos devolverá solo el primer selector que tenga la clase .card

// El método querySelectorAll te devuelve todos los selectores del tipo que hayas especificado del documento html.
console.log(document.querySelectorAll(".card")); // Nos devolverá todos los selectores que tengan la clase .card
console.log(document.querySelectorAll(".card")[2]); // También le podemos indicar la posición que queremos que nos devuelva.
console.log(document.querySelectorAll("#menu li")); // O indicarle que solo queremos los selectores que esten dentro de otros. */
/* 





*/
//          *********************************************** Video 63 DOM:Atributos y Data-Attributes ***********************************************

/* // Accediendo al atributo land del elemento html
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

// Según que atributo estemos llamando peude dar valores diferente si lo hacemos con el . o con el método getAttribute("")
console.log(document.querySelector(".link-index").href);
console.log(document.querySelector(".link-index").getAttribute("href"));

// Es una buena practica que las variables en las que vas a almecenar elementos del DOM declararlas con el símbolo dle dolar delante.
const $linkIndex = document.querySelector(".link-index");

// El método .setAttribute() recibe dos parametros, primero el atributo que queremos modificar o añadir y el segundo el valor que le daremos a ese atributo.
$linkIndex.setAttribute("target", "_blank");

// Con el método .hasAttribute("") podemos verificar si un elemento tiene dicho atributo.
console.log($linkIndex.hasAttribute("target"));

//Con el método .removeAttribute("") podemos eliminar un atributo de un elemento.
$linkIndex.removeAttribute("target");
console.log($linkIndex.hasAttribute("target")); // Aquí compruebo que efectivamente se ha eliminado el atributo target.

//--------- Data-Attributes
console.log($linkIndex.getAttribute("data-description"));
console.log($linkIndex.dataset);
 */

/* 





*/

//          *********************************************** Video 64 DOM:Estilos y variables CSS ***********************************************

/* const $linkIndex = document.querySelector(".link-index");

// Formas de acceder a propiedades CSS
console.log($linkIndex.style);
console.log($linkIndex.getAttribute("style"));

console.log($linkIndex.style.backgroundColor);
console.log($linkIndex.style.color);
console.log(window.getComputedStyle($linkIndex));
console.log(window.getComputedStyle($linkIndex).getPropertyValue("color"));

// Formas de modificar propiedades CSS

$linkIndex.style.setProperty("text-decoration", "none");
$linkIndex.style.setProperty("display", "block");

$linkIndex.style.width = "50%";
$linkIndex.style.textAlign = "center";
$linkIndex.style.marginLeft = "auto";
$linkIndex.style.marginRight = "auto";
$linkIndex.style.padding = "1rem";
$linkIndex.style.borderRadius = "0.5rem";

// Ahora aquí podemos ver que si accedemos a los estilos de este elemento de cualqiera de las 3 maneras anteriores nos devuelve todos los que le hemos añadido.
console.log($linkIndex.style);
console.log($linkIndex.getAttribute("style"));
console.log(window.getComputedStyle($linkIndex));

// **************** Variables CSS / Custom Properties CSS *************

//Nos guardamos unas variables para acceder mas comodamente a los elementos html y body
const $html = document.documentElement,
  $body = document.body;

// Accedemos a las variables CSS / Custom Properties CSS y las guardamos en una variable para luego mostrarlas por consola
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor, varYellowColor);

// Le asiganmos las variables CSS / Custom Properties CSS a los elementos body y html que teniamos guardados en unas variables.
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// Modificamos las variables CSS / Custom Properties CSS
$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor); */

/* 





*/

//          *********************************************** Video 65 DOM:Clases CSS ***********************************************

/* const $card = document.querySelector(".card");

//La propiedad className obtiene y establece el valor del atributo class del elemento especificado.
console.log($card.className);

// La propiedad de sólo lectura Element.classList devuelve una colección activa de DOMTokenList de los atributos de clase del elemento.
console.log($card.classList);
// El método .contains() de classList comprueba si la clase indicada existe en el atributo de clase del elemento. Y nos devolverá un boolean.
console.log($card.classList.contains("rotate-45"));
// El método .add() añade las clases indicadas. Si estas clases existieran en el atributo del elemento serán ignoradas.
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45")); // Comprobamos que ahora nos devuelve un true depués de añadirle dicha clase.
console.log($card.className); // Comprobamos que ahora nos devuelve las dos clases después de añadirle al segunda.
console.log($card.classList); // Comprobamos que ahora el DOMTokenList tiene 2 elementos, uno por cada clase.
// El método .remove() elimina las clases indicadas.
$card.classList.remove("rotate-45");
// El método .toggle() alterna el valor de la clase; ej., si la clase existe la elimina y devuelve false, si no, la añade y devuelve true.
$card.classList.toggle("rotate-45"); // La añade porque el elemento $card no tiene la propiedad rotate-45
console.log($card.classList.contains("rotate-45")); // Nos devuelve un true porque ahora si tiene la calse rotate-45.
$card.classList.toggle("rotate-45"); // Se elimina la propiedad rotate-45 porque el elemento $card ya tiene esta propiedad.
console.log($card.classList.contains("rotate-45")); // Nos devuelve un false ya que hemos eliminado la propiedad rotate-45.
// El método .replace("","") recibe dos parametos el primero es la clase la cúal queremos remplazar y el segundo es la clase que queremos que utilizaremos.
$card.classList.toggle("rotate-45"); // Le vuelvo a añadir la clase rotate-45 para poder remplazarla por otra.
$card.classList.replace("rotate-45", "rotate-135"); // Remplazamos la calse rotate-45 por la clase rotate-135. */

/* 





*/

//          *********************************************** Video 66 DOM:Texto y HTML ***********************************************

/* //Guardamos en una variable el parrafo con el id #que-es.
const $whatIsDom = document.getElementById("que-es");

// Texto que añadiremos al HTML através de javascript
let text = `
<p>
El Modelo del Obejeto (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML
</p>
<p>
Este proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS
</p>
<p>
<mark> El DOM no es parte de la especificación JavaScript, es una API para los navegadores. </mark>
</p>
`;

// La propiedad .innerContent inserta el contenido como texto, sin representar el código html escrito en el.
$whatIsDom.innerContent = text;
// La propiedad .innerHTML inserta dentro del elemento DOM que le indiquemos el contenido y respeta el código HTML que hemos añadido.
$whatIsDom.innerHTML = text;
//La propiedad .outerHTML remplaza el elemento del DOM que le indicamos por el contenido que le estemos pasando.
$whatIsDom.outerHTML = text; */

/* 





*/

//    *********************************************** Video 67 DOM: Traversing (Recorriendo el DOM)  ***********************************************

/* const $cards = document.querySelector(".cards");
console.log($cards);

//Para acceder a los hijos de un elemento utilizamos la propiedad .children
console.log($cards.children);

//También podmeos especificar a que hijo queremos acceder.
console.log($cards.children[2]);

//Tambien podemos elegir acceder al último o primer hijo de un elemento con las propiedades firstElementChild o lastElementChild.
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);

//Para acceder al padre de un elemento utilizmos la propiedad .parentElement.
console.log($cards.parentElement);

//Para acceder al elemento hermano anterior usamos la propiedad .previousElementSibiling y al hermano posterior .nextElementSibiling.
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);

//El método closest() de la interfaz Element devuelve el ascendiente más cercano al elemento actual (o el propio elemento actual) que coincida con el selector proporcionado por parámetro. Si no existe dicho ascendiente, devuelve null.
console.log($cards.closest("section")); // En este caso devuelve el mismo elemento ya que no hay un elemento section que este por encima de este.
console.log($cards.children[3].closest("section")); // Ahora le estamos diciendo que nos devuelva el elemento section padre más cercano del hijo en la posición 3 de $cards. Es decir el section padre más cercano a la cuarta imagen por eso nos devuelve el section que envuelve todas las imagenes. */

/* 





*/

//    *********************************************** Video 68 DOM: Creando Elementos yFragmentos  ***********************************************

/* // Vamos a añadir una imagen más en la section con la clase .cards

//En un documento HTML, el método Document.createElement() crea un elemento HTML especificado por su tagName
// Aquí nos creamos cada elemento que necesitamos (figure,img,figcaption y el texto del figcaption) y lo guardamos en varaibles, por otro lado tambien guardamos en una variable el elemento con la clase .cards que es donde añadiremos el nuevo elemento
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards");

// el método .appendChild() agrega el hijo que le indicamos como parámetro al elmento donde aplicamos el método.
// Ahora tenemos todos los elementos por separado, primero necesitariamos unirlos para luego añadirlos al elemento con la clase .cards. Entonces necesitamos que el elemento figure que creamos tenga dentro al elemento img y figcaption que tambien creamos, Y que figcaption tenga dentro el texto que también creamos y la imagen los atributos src y alt. Y por último añadirle la calse .card para que esté igual que las demás.

$img.setAttribute("src", "https://placeimg.com/200/200/animals"); // Añadimos atributo src al elemento img
$img.setAttribute("alt", "Animals"); // Añadimos atributo alt al elemento img
$figure.appendChild($img); // Añadimos el elemento guardado en la variable $img al elemnto guardado en la variable $figure

$figcaption.appendChild($figcaptionText); // Añadimos el elmento guardadoe n la variable $figcaptionText al elemento guardado en la variable $figcaption
$figure.appendChild($figcaption); // Añadimos el elemento guardado en la variable $figcaption al elemnto guardado en la variable $figure

$figure.classList.add("card"); // Añadimos la clase .card al elemento guardado en la variable $figure.
$cards.appendChild($figure); // Añadimos el elemento guardado en la variable $figuro al elemento guardado en la clase $cards.

// -----------------------------

// De esta forma al añadirle el contenido con la propiedad inner HTML como texto JavaScript no lo considera como un nodo, pero finalmente estamos generando contenido dinámicamente con JavaScript.

const $figure2 = document.createElement("figure"); // Creamos un elemento figure y lo guardamos en la variable $figure2

$figure2.innerHTML = `
   <img src="https://placeimg.com/200/200/people" alt="People" />
   <figcaption>People</figcaption>
`; // Al elemento guardado en $figure2 le añadimos el código html indicado.

$figure2.classList.add("card"); // Le añadimos la clase .cards para que sea igual a las demás.
$cards.appendChild($figure2);

// --------------------------

// Ahora añadiremos más de un elemento dinámicamente, en este caso desde los datos que tenemos en un array pero esto sería más útil cuando recibamos datos de un archivo JSON de una API o algún tipo de dato externo que recibamos y apartir del cual queramos crear contenido en nuestra web.

document.write("<h3>Listas creadas dinámicamente</h3>"); // Esto simplemente es poner un separador entre las figuras y esta lista, document.write no es una buena practica para añadir contenido.

const estaciones = ["primavera", "Verano", "Otoño", "Invierno"]; // Datos apartir del los cuales queremos generar contenido dinámicamente.

const $ul = document.createElement("ul"); // Creamos un elemento ul y lo guardamos en la variable $ul.
document.body.appendChild($ul); // En este caso añadimos el elemento guardado en la variable $ul como hijo del body.

estaciones.forEach((el) => {
  const $li = document.createElement("li"); // Por cada elemento del array estaciones crea un elemento li que se guardara en la variable $li
  $li.textContent = el; // elemento guardado en la variable $li le añadimos el texto del parametro el (es decir el elmento del array que este en ese momento).
  $ul.appendChild($li); // Al elmento guardado en la variable $ul le añadimos un hijo con el elemento guardado en la variable $li
});

// ----------------------
// Ahora añadiremos más de un elemento dinámicamente peor utilizando la técnica de innerHTML

const continentes = ["África", "América", "Asia", "Europa", "Oceania"]; // Datos apartir del los cuales queremos generar contenido dinámicamente.
const $ul2 = document.createElement("ul"); // Creamos un elemento ul y lo guardamos en la variable $ul2.
document.body.appendChild($ul2); // En este caso añadimos el elemento guardado en la variable $ul2 como hijo del body.

continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`)); // A cada elemento de continentes le añades a $ul2 el código html <li>${el}</li>.

// ----------------------
// Cada inseción de elmentos al DOM es un operación costosa que puede afectar al rendimiento de tu web o app, en los casos anteriores al ser solo 4 y 5 elementos no pasa nada, pero imaginate por ejemplo la web de un comercio donde podriás lelgar a cargar cientos o miles de productos esto sería perjucial para el rendimiento.
// Para eso tenemos los fragmentos del dom al cúal le podemos ir añadiendo elementos y una vez que este fragmento tenga todos los elementos cargados se hará la inserción al DOM con todos los elemetnos cargados de ese fragmento. Con lo cuál solo hacemos una insercíon al DOM.
// Y esta es la mejor opción para añadir elementos dinámicamente.

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const $ul3 = document.createElement("ul");

const $fragment = document.createDocumentFragment(); // Aquí creamos nuestro fragmento y lo guardamos en la variable $fragment

meses.forEach((el) => {
  const $li = document.createElement("li"); // Por cada elemento del array meses crea un elemento li que se guardara en la variable $li
  $li.textContent = el; // elemento guardado en la variable $li le añadimos el texto del parametro el (es decir el elmento del array que este en ese momento).
  $fragment.appendChild($li); // Aquí es donde en lugar ir haciendo una inserción sobre el DOM por cada elemento que tenemos se lo vamos añadiendo al fragmento que hemos creado y guardado en la variable $fragment
});

$ul3.appendChild($fragment); // Una vez con todos los elementos cargados en el fragmento los añadimos al elemento ul guardado en la vatiable $ul3
document.body.appendChild($ul3); // Y finalmente le añadimos el elemento guardado en la variable $ul3 con todos los elementos al body. */

/* 





*/

//  *********************************************** Video 69 DOM: Templates HTML  ***********************************************

/* const $cards = document.querySelector(".cards");
const $template = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();
const cardContent = [
  {
    title: "Tecnologia",
    img: "https://placeimg.com/200/200/tech",
  },
  {
    title: "Animales",
    img: "https://placeimg.com/200/200/animals",
  },
  {
    title: "Arquitectura",
    img: "https://placeimg.com/200/200/arch",
  },
  {
    title: "Gente",
    img: "https://placeimg.com/200/200/people",
  },
  {
    title: "Naturaleza",
    img: "https://placeimg.com/200/200/nature",
  },
];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment); */

/* 





*/

//  *********************************************** Video 70 DOM: Modificando Elementos (Old Style)  ***********************************************

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  //El método Node.cloneNode() devuelve un duplicado del nodo en el que este método fue llamado.
  //true si los hijos del nodo también deben ser clonados, o false para clonar únicamente al nodo.
  $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
   <img src="https://placeimg.com/200/200/any" alt="Any">
   <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//El método Node.replaceChild() reemplaza un nodo hijo del elemento especificado por otro. El primer parámetro es el nuevo nodo que introduciremos y el segundo parámetro es el nodo a remplazar.
//$cards.replaceChild($newCard, $cards.children[2]);

//El método Node.insertBefore() inserta un nodo antes del nodo de referencia como hijo de un nodo padre indicado
//$cards.insertBefore($newCard, $cards.firstElementChild);

// El método Node.removeChild() elimina un nodo hijo del DOM y puede devolver el nodo eliminado
//$cards.removeChild($cards.lastElementChild);

// Imprimimos el clon que teniamos guardado en $cloneCards.
//document.body.appendChild($cloneCards); */

/* 





*/

//  ********************************************* Video 71 DOM: Modificando Elementos (Cool Style)  *********************************************

/* 
.insertAdjacent...
   .insertAdjacentElement(position, el)
   .insertAdjacentHTML(position, html)
   .insertAdjacentText(position, text)

Posiciones:
   beforebegin (hermano anterior)
   afterbegin (primer hijo)
   beforeend (último hijo)
   afterend (hermano siguiente)
*/

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

$newCard.innerHTML = `
   <img src="https://placeimg.com/200/200/any" alt="Any">
   <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//$cards.insertAdjacentElement("beforebegin", $newCard);
//$cards.insertAdjacentElement("afterbegin", $newCard);
//$cards.insertAdjacentElement("beforeend", $newCard);
$cards.insertAdjacentElement("afterend", $newCard); */

/* 





*/

//  ********************************************* Video 72 DOM: Manejadores de Eventos  *********************************************

/* function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

// Los manejadores de eventos semánticos solo pueden recibir una función por evento. Si añades más de una se quedará con la última
const $eventoSemantico = document.getElementById("evento-semantico");

$eventoSemantico.onclick = holaMundo; // esta función no se ejecutará ya que a continuación le asignamos otra función al evento onclick.
$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo manejador de eventos semánticos");
  console.log(event);
  console.log(e);
};

// Manejador de evento multiple
// Con .addEventListener("","") podemos asignar más de una función al mismo evento. Este recbe dos parámetros el primero será el evento que desencadenará la acción y el segundo será la función que le asignaremos a ese evento.
const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", holaMundo); // Podemos pasarle una funcíon ya declarada anteriormente o declararla aquí.
$eventoMultiple.addEventListener("click", (e) => {
  alert("Manejador de eventos multiple");
  console.log(e.type);
  console.log(e.target);
}); */

/* 





*/

//  ******************************************* Video 73 DOM: eventos con parámetros y remover parámetros  *******************************************

/* function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
}

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Jon");
});

const $eventoRemover = document.getElementById("evento-remover");

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick); */

/* 





*/

//  ******************************************* Video 74 DOM: flujo de eventos (burbuja y captura)  *******************************************

/* const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);

function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
}

// Fase de burbuja, sin especificar el tercer parámetro o poniendo false que es su valor por defecto. Los eventos se propagan hacia su elemento superior.
//Fase de captura, especificando el tercer parámetro en true. Los eventos se propagan hacia su elemento inferior.
$divsEventos.forEach((div) => {
  //div.addEventListener("click", flujoEventos);
  div.addEventListener("click", flujoEventos, true);
});
 */

/* 




*/

//  ******************************************* Video 75 DOM: stopPropagation & preventDefault  *******************************************

/* const $divsEventos = document.querySelectorAll(".eventos-flujo div");
const $linkEvento = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
  e.stopPropagation(); // El método stopPropagation() de la interfaz Event evita la propagación adicional del evento actual en las fases de captura y burbuja.
}

$divsEventos.forEach((div) => {
  //div.addEventListener("click", flujoEventos);
  div.addEventListener("click", flujoEventos, false);
});

$linkEvento.addEventListener("click", (e) => {
  alert("Hola soy tu amigo y docente Jonathan MirCha");
  e.preventDefault(); // Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
}); */

/* 





*/

//  ******************************************* Video 76 DOM: Delegación de Eventos  *******************************************

// Delegación de eventos es un mecanismo a través del cual evitamos asignar event listeners a múltiples nodos específicos del DOM, asignando un event listener a solo un nodo padre que contiene el resto de estos nodos

/* function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
  e.stopPropagation(); // El método stopPropagation() de la interfaz Event evita la propagación adicional del evento actual en las fases de captura y burbuja.
}

document.addEventListener("click", (e) => {
  console.log("Click en ", e.target);

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy tu amigo y docente Jonathan MirCha");
    e.preventDefault();
  }
}); */

/* 





*/

//  ******************************************* Video 77 BOM: Propiedades y Eventos  *******************************************

// El evento resize se produce cuando la ventana del navegador es redimensionada.
window.addEventListener("resize", (e) => {
  console.clear();
  console.log("*********** Evento resize ************");
  console.log(window.innerWidth); //Representa el ancho (en pixeles) del viewport.
  console.log(window.innerHeight); //Representa la altura (en pixeles) del viewport.
  console.log(window.outerWidth); //Representa el ancho de toda la ventana, incluyendo la barra de notificaciones (si se encuentra) y los bordes.
  console.log(window.outerHeight); //Representa el alto de toda la ventana, incluyendo la barra de notificaciones (si se encuentra) y los bordes.
  console.log(e);
});

// El evento scroll se produce cuando la vista del documento o un elemento es deslizado.
window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("*********** Evento scroll ************");
  console.log(window.scrollX); // Retorna el número de pixels que el documento ha sido desplazado horizontalmente.
  console.log(window.scrollY); // Retorna el número de pixels que el documento ha sido desplazado verticalmente.
  console.log(e);
});

// El evento load se dispara cuando un recurso y sus recursos dependientes han terminado de cargar. Es decir no solo cuando se ha cargado el documento html, sino todos los css, js y demás recursos dependientes de página.
window.addEventListener("load", (e) => {
  console.log("*********** Evento load ************");
  console.log(window.screenX); // Retorna el número de pixels que el documento ha sido desplazado horizontalmente cuando la ventana del navegador haya terminado de cargar.
  console.log(window.screenY); // Retorna el número de pixels que el documento ha sido desplazado verticalmente cuando la ventana del navegador haya terminado de cargar.
  console.log(e);
});

// El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, images y subframes para  finalizar la carga.
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("*********** Evento DOMContentLoaded ************");
  console.log(window.screenX); // Retorna el número de pixels que el documento ha sido desplazado horizontalmente cuando la ventana del navegador haya terminado de cargar.
  console.log(window.screenY); // Retorna el número de pixels que el documento ha sido desplazado verticalmente cuando la ventana del navegador haya terminado de cargar.
  console.log(e);
});
