// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const aleatorio = (min, max) => console.log(Math.round(Math.random()*(max - min))+min)
aleatorio(501, 600);

/*  Para resolver este problema utilizé el metodo .random del obejto Math al cúal le paso 2 parámetro para establecer el rango entre el cúal quiero que salga el número aleatorio. Primero saco un número aleatorio entre 0 y el max-min al cúal después le sumo el min. Y a ese resultado le aplico el metodo .round del objeto Math para redondearlo al número entero más cercano
*/




// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero) =>
    (numero.toString() === numero.toString().split("").reverse().join(""))
        ?console.log(`Tu número ${numero} es capicua`)
        :console.warn(`Tu número ${numero} no es capicua`);

capicua(18.81)

/* Para resolver este problema utilizo la misma lógica que para saber si una palabra es un palíndromo pero añadiendole el metodo .toString() al número que le paso por parámetro a la función. Así siendo un string puedo aplicarle los metodos .split() para crear el array, .reverse() para invertir el orden y .join() para volver a crear un string pero con el orden invertido y comparar si ambos valores son iguales.
*/





// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero) => {
    for (let i = 1; i <= numero; i++) {
        total = total * i;
    }
    return console.log(total);
}
let total = 1;
factorial(10);

/* Para resolver este problema utilizo una aroow function con un parámetro donde el pasaré el número del cúal quiero calcular su factorial. Dentro de la funcion "factorial" hago un bucle for en el que iremos multiplicando la variable total definida en 1 por el índice inicializado en 1 y el RESULTADO LO GUARDAREMOS EN LA VARIABLE TOTAL y repetiremos este proceso pero con el nuevo valor de la variable total y el del índice que va aumentando de uno en uno cada iteración del for. Cuando el índice sea mayor al número pasado por el parámetro (el número del cúal queremos calcular su factorial) dejaremos de hacer esta operación y el número guardado en la variable total será el factorial del número pasado por el parámetro a la función.

*/
