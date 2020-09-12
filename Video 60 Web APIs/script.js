//          *********************************************** Video 60 WEB APIs ***********************************************

// Ejemplo muy sencillo de una de las tantas WEB APIs. En este caso speechSynthesis reproduce un texto en un sonido.
/* let texto = "Hola soy tu amigo y docente digital Jonathan MirCha";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto); */

//          *********************************************** Video 61 DOM Introducción ***********************************************

console.log("********** Elementos del Documento **********");
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
console.log(document.scripts); // En nuestro ejemplo nos muestra dos porque tenemos la extension de Live Server en CS Code el cual inyecta un script en el documento html.
