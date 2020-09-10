/* Ejercicios 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

/* Ejercicio 1
	Para resolver este problema utilize el método typeof en un if para comprobar que el tipo de dato que recibimos es un string y después con el método .length sé el número de caracteres de la cadena de texto recibida.
*/
// let cadena = "Hola Mundo";
function contar(cadena) {
	if (typeof cadena != "string"){
		console.log("Esto no es una cadena de texto")
	} else{
		console.log("El número de caracteres de su cadena de texto es:  " + cadena.length)
	}
	
}
contar("Hola Mundo");

/* Así lo resolvio Jon MirCha, utilizando una arrow function y una función expresadas (es decir guardadas en una variable). Y utilizando el operador ternario para comprobar si la cadena de texto esta vacía o no*/
const contarCaracteres = (cadena = "") => 
(!cadena)
	?console.warn("No ingresaste ninguna cadena")
	:console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`); // Templates string para concadenar las frases con las varaibles que quiero mosrtar.

contarCaracteres("Hola mundo");
contarCaracteres();


/* Ejercicio 2
	Para resolver el ejercicio 2 he utilzado el método .substring para que me devuelva los caracteres de la cadena de texto original comprendidos entre los dos parámetros que utilizo en el método .substring, en este caso entre 0 y 4 para que así me devuelva la palabrá "Hola".

*/
function cortar(cadena) {
	console.log(cadena.substring(0,4));
}
let texto = "Hola Mundo"
cortar(texto);


/* Ejercicio 3
	Para resolver este ejercicio guardé la cadena de texto en una variable y el separador que voy a utilizar en el método split en otra variable. Esta dos variables se las paso por parámetros a la función cortar y con el metodo split saco un array separando por el espacio (que es mi separador) la cadena de texto. 
*/
function array(cadena, separador) {
	cortado = cadena.split(separador);
	console.log(cortado);
	
}
let cadena = "Hola Mundo";
let espacio = " ";
array(cadena, espacio);

/* Ejercicio 4
	Para resolver el ejercicio 4 utilizé el método .repeat para repetir el texto tantas veces como le indica el parámetro "repetidor"
*/
function repetir(cadena, repetidor) {
	console.log(cadena.repeat(repetidor));
}
repetir("HOLA MUNDO, ", 3);

/* Ahora utilizando una arrow function en una función expresada y un operador ternario para hacer la validación de la cadena de texto ingresada.*/
const repetirCadena = (cadena, repetidor) =>
	(typeof cadena != "string")
		?console.warn("No ingresaste ninguna cadena de TEXTO")
		:console.info(cadena.repeat(repetidor));

repetirCadena(); //Cadena de exto vacía
repetirCadena("Hola mundo, " , 4); // Cadena de texto correcta
repetirCadena(123); // números en lugar de texto
