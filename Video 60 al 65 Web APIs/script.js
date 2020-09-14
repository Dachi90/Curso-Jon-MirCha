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

//          *********************************************** Video 65 DOM:Clases CSS ***********************************************

const $card = document.querySelector(".card");

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
$card.classList.replace("rotate-45", "rotate-135"); // Remplazamos la calse rotate-45 por la clase rotate-135.
