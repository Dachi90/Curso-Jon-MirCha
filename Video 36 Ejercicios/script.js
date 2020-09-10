// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena = (cadena) =>
    (typeof cadena != "string")
        ?console.warn("No ha introducido una cadena de texto")
        :console.info(cadena.split("").reverse().join(""));

// let cadena = prompt("Introduzca una palabra", "Hola mundo");
//invertirCadena(cadena)

/*  Aquí utilizamos una arrow function expresada con un operador ternario para validar que el usuario ha introducido un string si es falso mostramos el mensaje de la linea 12 y si es verdadero ejecutamos el código de la linea 13. Donde primero convertimos el string en un array con el método .split(), entonces al array que nos devuelve le aplicamos el método .reverse() con el que invertimos el orden del array, a continuación le aplicamos el metodo .join() con el cúal el array que teniamos ya con el orden invertido lo convierte en un string y así obtenemos la cadena de texto con el orden invertido.
*/




// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contar = (texto, palabra) => {
    let arreglo = texto.split(" ");
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === palabra) contador.push(i)
    }
    console.log(contador.length)
}
//let contador = [];
//let texto = "Hola que tal? que te cuentas? que tal va todo?"
//contar(texto, "que");

/*  Para resolver este ejercicio utilizo una arrow function en la cúal primero convertimos el texto en un array separando cada palabra. Después recorremos cada posición de este array comprobando si la palabra coincide con la que le hemos especificado através del parámetro y si coincide la añadimos a la array contador que teniamos declarada pero vacía. Por último le decimos que nos muestre cuantas posiciones tiene el array contador al terminar el bucle for, con loq ue obtenemos el número de veces que se ha encontrado dicha palabra en el texto.
*/





// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (cadena) =>
    (cadena.toLowerCase() === cadena.toLowerCase().split("").reverse().join(""))
        ?console.info("Su palabra es un palíndromo")
        :console.warn("Su palabra no es un palíndromo")

//let palabra = prompt("Introduzca un pálindormo","salas");
//palindromo(palabra);

/*   Aquí utilizamos el mismo planteamiento que en el ejercicio 5 pero en la condición del operador ternario validamos que la cadena de texto que introduce el usuario es igual (===) a la cadena de texto que generamos al invertir el orden. Y añadimos el método de .toLowerCase para que si el usuario introduce la palabra con la primera letra en mayúsculas al invertir el orden sea igual pe: Salas != salaS pero salas = salas

*/




// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const remplazar = (texto) => console.log(texto.replace(remplazo, ""))

//let parrafo = "xyz1, xYz2, xyz3, xyz4 y xyz5";
//let remplazo = /xyz/gi
//remplazar(parrafo);

/* Para resolver el problema tengo una variable con con el texto del cúal voy a eliminar cierto patrón y otra variable con un expresión regular con el patrón que quiero omitir. Luego en una arrow function le paso el texto por parámetro y le digo que me muestre por consola el texto pero remplazando el patrón que tenía guardado en la variable (remplazo) por un cadena vacía. Y con esto consigo omitir el patrón que habia especificado del texto.
*/