//                     **************************------------------- Video 49 Symbols -------------------**************************

// Symbol es un tipo de datos cuyos valores son únicos e immutables. Dichos valores pueden ser utilizados como identificadores (claves) de las propiedades de los objetos.  Cada valor del tipo Symbol tiene asociado un valor del tipo String o Undefined que sirve únicamente como descripción del símbolo.

/* let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2);
console.log(id,id2);
console.log(typeof id,typeof id2);

const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const PERSONA ={
   [NOMBRE]: "Martín"
};
console.log(PERSONA);

PERSONA.NOMBRE = "Martín Bergesio";
console.log(PERSONA);

console.log(PERSONA.NOMBRE);
console.log(PERSONA[NOMBRE]);

PERSONA[SALUDAR] = function(){
   console.log("hola");
};

console.log(PERSONA);
PERSONA[SALUDAR]();


// los Symbols no se puede recorrer con un for
for (let propiedad in PERSONA) {
   console.log(propiedad);
   console.log(PERSONA[propiedad]);
}

// Para eso hay un método del objeto Objetc que es .getOwnPropertySymbols el cúal te devuelve los Symbols de un objeto en un array.
console.log(Object.getOwnPropertySymbols(PERSONA)); */

//                     ************************** ------------------- Video 50 Set -------------------**************************

// El objeto Set permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.

// Solo almacena valores únicos, es decir no se pueden repetir. El valor 2 y false comoe stan repetidos solo almacena uno. Los objetos cada uno es único por eso almacena los dos.
/* const set = new Set([
  1,
  2,
  3,
  3,
  4,
  5,
  true,
  false,
  false,
  {},
  {},
  "hola",
  "HOLA",
]);
console.log(set);
console.log(set.size);

const set2 = new Set();
// El método add() añade un nuevo elemento con un valor específico al final del objeto Set.
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(true);
set2.add(false);
set2.add({});
set2.add("hola");

console.log(set2);
console.log(set2.size);

// Recorriendo el objeto Set
console.log("Recorriendo el objeto set");
for (const item of set) {
  console.log(item);
}

//Recorriendo el objeto set2
console.log("Recorriendo el objeto set2");
set2.forEach((element) => {
  console.log(element);
});

// El objeto set aún que pareza un Array y se itinerable no se pueden acceder a un valor en concreto referenciando su posición. Para eso tenemos que convertirlo a un Array con el método from del objeto Array.
console.error(set[0]);

let arr = Array.from(set);
console.log(arr);
console.log(arr[0]);

// El método delete() remueve el elemento especificado del objeto Set.
set.delete("HOLA");
console.log(set);

// El método has() retorna un booleano indicando si el elemento especificado existe en el objeto Set o no.
console.log(set.has("hola"));
console.log(set.has("adios"));

// El método clear() remueve todos los elementos de un objeto Set.
set2.clear();
console.log(set2);

// El método entries() devuelve un nuevo objeto de tipo Iterator que contiene un array de tuplas [value, value] por cada elemento en el Set original, manteniendo el orden de inserción. En los objetos de tipo Set no existe una clave key como ocurre en los objetos de tipo Map. Sin embargo, para mantener una API similar a la de los objetos de tipo Map, cada entry contiene el mismo valor para su clave y valor, devolviendo por tanto un array de tuplas [value, value].

const set3 = new Set();
set3.add(42);
set3.add("forty two");

const iterator3 = set3.entries();
for (const item of iterator3) {
  console.log(item);
} */

//                   **************************------------------- Video 51 Map -------------------**************************

// El objeto Map almacena pares clave/valor. Cualquier valor (tanto objetos como valores primitivos) pueden ser usados como clave o valor.
/* let mapa = new Map();

// El método set() agrega un nuevo elemento al objeto Map con la llave y el valor especificado.
mapa.set("nombre","Martín");
mapa.set("apellido","Bergesio");
mapa.set("edad",29);
console.log(mapa);
console.log(mapa.size);

// El método has() devuelve un booleano indicando si el elemento con la llave especificada existe o no.
console.log(mapa.has("correo"));
console.log(mapa.has("nombre"));

// método get() devuelve un elemento específico de un objeto Map
console.log(mapa.get("apellido"));

// Con el método set() también podemos sobrescribir el valor de un elemento.
mapa.set("apellido", "Gonzalez");
console.log(mapa.get("apellido"));

// El método delete() elimina el elemento especificado de un objeto Map.
mapa.delete("edad")
console.log(mapa)

//
for (let [key, value] of mapa) {
  console.log(`Llave: ${key}, Valor ${value}`);
} */

//              **************************------------------- Video 53 Iterable & Iterators -------------------**************************

/* En JavaScript, un iterador es un objeto que permite recorrer una colección y devolver un valor al terminar. 
Específicamente, un iterador es un objeto que implementa el protocolo de iteración a través del método next(), el cual devuelve un objeto con dos propiedades: */

/* const iterable = [1,2,3,4,5];
// const iterable = "Hola Mundo";
// const iterable = new Set([1,2,3,4,5]);
// const iterable = new Map([["nombre", "Martín"],["edad", 29]]);

//Accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();
console.log(iterable);
console.log(iterador);
//console.log(iterador.next());

let next = iterador.next();

while (!next.done){
  console.log(next.value);
  next = iterador.next()
}; */

//              **************************------------------- Video 54 Generators -------------------**************************

/* Aunque los iteradores personalizados son una herramienta útil, su creación require una programación meticulosa ya que necesitan mantener su estado interno explícitamente. Los generadores son una alternativa poderosa: permiten definir un algoritmo iterativo al escribir una sola función que puede mantener su propio estado.
Una función generadora (constructor GeneratorFunction) es un tipo especial de función que sirve como una fábrica de iteradores. Cuando se ejecuta, regresa un nuevo objeto Generador. Una función se convierte en una Función Generadora si utiliza la sintáxis function*.     */

/* function* iterable() {
  yield "hola";
  console.log("Hola consola");
  yield "hola 2";
  console.log("Seguimos con más instrucciones de nuestro código");
  yield "hola 3";
  yield "hola 4";
}

let iterador = iterable();
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next()); 

for (let y of iterador) {
  console.log(y);
}

const arr = [...iterable()];
console.log(arr); */

//              **************************------------------- Video 55 Proxies -------------------**************************

// El objeto Proxy se usa para definir un comportamiento personalizado para operaciones fundamentales (por ejemplo, para observar propiedades, cuando se asignan, enumeración, invocación de funciones, etc).

/* const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

const manejador = {
  set(obj, propiedades, valor) {
    if (Object.keys(obj).indexOf(propiedades) === -1) {
      return console.error(
        `La propiedad "${propiedades}" no existe en el objeto persona`
      );
    }
    if (
      (propiedades === "nombre" || propiedades === "apellido") &&
      !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor)
    ) {
      return console.error(
        `La propiedad ${propiedades} sólo acepta letras y espacios en blanco.`
      );
    }
    obj[propiedades] = valor;
  },
};

const martin = new Proxy(persona, manejador);
martin.nombre = "Martín";
martin.apellido = "Bergesio";
martin.edad = 29;
martin.twitter = "@martinB";
console.log(martin); */

//          **************************------------------- Video 56 Propiedades dinámicas -------------------**************************

// El nombre de la propiedad de un objeto puede ser cualquier cadena válida de JavaScript, o cualquier cosa que se pueda convertir en una cadena, incluyendo una cadena vacía. Sin embargo, cualquier nombre de propiedad que no sea un identificador válido de JavaScript (por ejemplo, el nombre de alguna propiedad que tenga un espacio o un guión, o comience con un número) solo se puede acceder utilizando la notación de corchetes. Esta notación es muy útil también cuando los nombres de propiedades son determinados dinámicamente (cuando el nombre de la propiedad no se determina hasta el tiempo de ejecución)

/* let aleatorio = Math.round(Math.random() * 100 + 5);
const objUsuarios = {
  [`id_${aleatorio}`]: "valor aleatorio.",
  // Se puede rellenar con una propiedad dinámicamente a la hora que lo estamos declarando como en este caso o más tarde como veremos a continuación.
};
const usuarios = ["Jon", "Irma", "Miguel", "Kala", "kEnAi"];

console.log(objUsuarios); // Antes de determinar las propiedades.
usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario)); // Determinando las propiedades dinámicamente apartir del array usuario.
console.log(objUsuarios); // Después de determinar las propiedades dinámicamente
 */

//          **************************------------------- Video 57 THIS -------------------**************************

console.log(this);
console.log(window);
console.log(this === window);

// Aquí lo utilizamos con un contexto global, es decir en el objeto window. Porque no está dentro de ningun otro contexto (objeto).
this.nombre = "Contexto GLOBAL";

function imprimir() {
  console.log(this.nombre);
}
imprimir();

// Aquí lo utilizamos dentro del contexto del objeto "obj" por lo tanto this hace referencia a dicho objeto.
const obj = {
  nombre: "Contexto OBJETO",
  imprimir: function () {
    console.log(this.nombre);
  },
};
obj.imprimir();

// En este caso creamos un nuevo objeto en el cuál dentro de la propiedad imprimir le asignamos la funcion imprimir que tenemos declarado en el ambito global. Y aún que la function imprimir este ene l ambito global como se ejecuta dentro del ambito del objeto "obj2" this hace referencia a este y no al objeto general window. Por lo tanto imprime la propiedad nombre del objeto "obj2".

const obj2 = {
  nombre: "Contexto OBJETO 2",
  imprimir: imprimir, //Cuando la propiedad y su valor tienen el mismo nombre podriamos simplificar y solo escribir la propiedad, en este caso lo dejo para que se más explicativo
};
obj2.imprimir();

//Las arrow functions no crean su propio scope por lo tanto en este caso la palabra this tiene el contexto del padre del objeto "obj3" es decir del objeto global window.

const obj3 = {
  nombre: "Contexto OBJETO 3",
  imprimir: () => {
    console.log(this.nombre);
  },
};
obj3.imprimir();
