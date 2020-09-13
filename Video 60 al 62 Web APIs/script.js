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

console.log(document.getElementsByTagName("li")); // Este método ha sido remplazado por .querySelector("")
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
console.log(document.querySelectorAll("#menu li")); // O indicarle que solo queremos los selectores que esten dentro de otros.
