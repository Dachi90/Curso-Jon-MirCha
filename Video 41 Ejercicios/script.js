// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const alCuadrado = (numeros) => {
   if(!numeros) return console.info("No has introducido el array de números"); //Compruebo que numeros no este vacío.
   if(!(numeros instanceof Array)) return console.warn(`${numeros} no es una Array.`) // Compruebo que numeros sea un Array.
   if(numeros.length === 0) return console.warn("El array introducido esta vacío.") //Compruebo que no sea un Array vacia.
   

   let numeroAlCuadrado = [];
   console.log(numeros);
   
   for (let i = 0; i < numeros.length; i++){
      if (typeof numeros[i] != "number") { //Compruebo que en cada posición del array haya un número.
         console.warn(`El valor ${numeros[i]} ingresado en la posicion ${i + 1} no es un número.`);
      } else {
         numeroAlCuadrado.push(numeros[i]*numeros[i]);
      }
   }
   return console.log(numeroAlCuadrado);
}
//alCuadrado();
//alCuadrado("hola");
//alCuadrado([]);
//alCuadrado({});
//alCuadrado([1,2,"k",5]);
//alCuadrado([1,2,3,5]);

/* Para resolver este ejercicio creo una array vacía en la que iré guardando los números al cuadrado. Después hago un bucle for en que voy recorriendo el parámetro numeros con el array de números que nos ingresaron y en cada posición lo voy multiplicando por si mismo y lo añado a la array que tenía vacía. Para terminar muestro el array con los numeros que ingreso el usuario pero al cuadrado */





// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const numMayoyMenor = (numeros) => {

if(!numeros) return console.info("No has introducido el array de números"); //Compruebo que numeros no este vacío.
if(!(numeros instanceof Array)) return console.warn(`${numeros} no es una Array.`) // Compruebo que numeros sea un Array.
if(numeros.length === 0) return console.warn("El array introducido esta vacío.") //Compruebo que no sea un Array vacia.
for (i=0; i<numeros.length;i++){ //Compruebo que en cada posición del array haya un número.
   if(typeof numeros[i] != "number")
      return console.error(`El array solo puede contener números`);
};

let numOrdenado = numeros.sort(function(a, b){ //Ordeno la función número de menor a mayor.
   return a - b
});
console.log(numOrdenado);
console.log(`El número menor de tu array es ${numOrdenado[0]} y el mayor ${numOrdenado[numOrdenado.length - 1]}`);  // muestro el número de la posicion 0 y el último del array ya ordenadod menor a mayor.
};

//numMayoyMenor();
//numMayoyMenor("hola");
//numMayoyMenor([]);
//numMayoyMenor(["e","i"]);
//numMayoyMenor([3,5,925,6,2,10,"a"]);
//numMayoyMenor([3,5,925,6,2,-10,]);






// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const parImpar = (numeros) => {
   if(!numeros) return console.info("No has introducido el array de números"); //Compruebo que numeros no este vacío.
   if(!(numeros instanceof Array)) return console.warn(`"${numeros}" no es una Array.`) // Compruebo que numeros sea un Array.
   if(numeros.length === 0) return console.warn("El array introducido esta vacío.") //Compruebo que no sea un Array vacia.
   for (i=0; i<numeros.length;i++){ //Compruebo que en cada posición del array haya un número.
      if(typeof numeros[i] != "number")
         return console.error(`El array solo puede contener números`);
   };

//Creo un obejeto con dos propiedades que son dos arrays vacios.
   let numParImpar = {  
      numPar: [],
      numImpar: []
   };

   // Recorro el parámetro numeros y si es divisible entre dos lo añado a numParImpar.numPar y si no a numParImpar.numImpar
   for (i=0;i<numeros.length;i++) {
      (numeros[i]%2 === 0)
         ?numParImpar.numPar.push(numeros[i])
         :numParImpar.numImpar.push(numeros[i]);
   }
   console.log(numParImpar); 
}
//parImpar();
//parImpar(true);
//parImpar([]);
//parImpar([1,2,3,4,5,"a",7]);
//parImpar([1,2,3,4,5,6,7,8,9,0])