//          **************************------------------- Video 57 THIS -------------------**************************

/* console.log(this);
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
obj3.imprimir(); */

//          **************************------------------- Video 58 call, apply, bind -------------------**************************

console.log(this);
this.lugar = "Contexto Global";
// La función saludar está en un contexto global ya que no esta dentro de ningún objeto.
function saludar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}
saludar("Hola", "Martín");

const obj = {
  lugar: "Contexto Objeto obj",
};

// Con el método .call() le indicamos el objeto el cúal queremos que sea el contexto de this. Por eso ahora nos muestra "Contexto del Objeto obj" en lugar de "contexto global" que sería el de la función saludar.
saludar.call(obj, "Hola", "Martín");

// Con el metodo .apply() funciona de igual manera con la diferencia que recibe los paremetros en forma de array en lugar de separados por coma com en el método .call()
saludar.apply(obj, ["Adios", "Martín"]);

// Con el método .bind() podemos asignarle a una funcíon el contexto del objeto que le pasemos como parametro al método bind.

const persona = {
  nombre: "Martín",
  saludar: function () {
    console.log(`Hola ${this.nombre}`);
  },
};
persona.saludar();

const otraPersona = {
  saludar: persona.saludar.bind(persona),
};

otraPersona.saludar();
