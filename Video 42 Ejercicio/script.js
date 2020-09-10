// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenar = (numeros = undefined) => {
   if(!numeros) return console.info("No has introducido el array de números"); //Compruebo que numeros no este vacío.
   if(!(numeros instanceof Array)) return console.warn(`"${numeros}" no es una Array.`) // Compruebo que numeros sea un Array.
   if(numeros.length === 0) return console.warn("El array introducido esta vacío.") //Compruebo que no sea un Array vacia.
   for (let num of numeros) { //Compruebo que en cada posición del array haya un número.
      if(typeof num !== "number") return console.error(`El valor ${num} ingresado NO es un número. Solo se aceptan números`);
   }

   return console.info({ // Objeto con un array ordenado de menor a mayor y otra de mayor a menor.
      original: numeros,
      asc: numeros.map(el => el).sort(),
      desc: numeros.map(el => el).sort().reverse()
   });
}
//ordenar();
//ordenar("hola");
//ordenar([]);
//ordenar([3,1,4,"a",5]);
//ordenar([3,1,2,4,2]);

/* Para resolver este ejercicio primero hago las comprobocaciones que están explicadas arriba. Luego ordeneno el array de numeros ingresado por el usuario con el metodo .sort() y lo guardo en otro array. Por último creo un nuevo objeto con dos propiedades una con el array ordenador de menor a mayor y el otro de maor a menor y lo mestro este objeto por la consola.*/






// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const elmentosRepetidos = (elementos = undefined) => {
   if(!elementos) return console.info("No has introducido el array."); //Compruebo que elementos no este vacío.
   if(!(elementos instanceof Array)) return console.warn(`"${elementos}" no es una Array.`) // Compruebo que elementos sea un Array.
   if(elementos.length === 0) return console.warn("El array introducido esta vacío.") //Compruebo que no sea un Array vacia.

   let noRepetidos = [... new Set(elementos)]; // 
   console.log(elementos); //Array original.
   console.log(noRepetidos); // Array sin los elementos repetidos.
}
//elmentosRepetidos();
//elmentosRepetidos("hola");
//elmentosRepetidos([]);
//elmentosRepetidos(["a",2,"2","a",2,true,false,true]);





// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (numeros) =>{
   if(!numeros) return console.info("No has introducido el array de números"); //Compruebo que numeros no este vacío.
   if(!(numeros instanceof Array)) return console.error(`"${numeros}" no es una Array.`) // Compruebo que numeros sea un Array.
   if(numeros.length === 0) return console.error("El array introducido esta vacío.") //Compruebo que no sea un Array vacia.
   for (let num of numeros) { //Compruebo que en cada posición del array haya un número.
      if(typeof num !== "number") return console.error(`El valor ${num} ingresado NO es un número. Solo se aceptan números`);
   }
   let suma = 0;
   numeros.forEach(element => {
      suma +=element;
   });
   console.log(`La suma de los números es ${suma} y el promedio es ${suma/numeros.length}`)
}
//promedio();
//promedio("hola");
//promedio([]);
//promedio([1,2,3,"a"]);
//promedio([1,2,3,4,5,6,7,8,9,0])