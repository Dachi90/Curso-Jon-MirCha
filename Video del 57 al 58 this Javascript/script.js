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
