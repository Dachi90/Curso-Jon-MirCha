//          **************************------------------- Video 59 JSON -------------------**************************

// JavaScript Object Notation (JSON) es un formato basado en texto estándar para representar datos estructurados en la sintaxis de objetos de JavaScript. Es comúnmente utilizado para transmitir datos en aplicaciones web (por ejemplo: enviar algunos datos desde el servidor al cliente, así estos datos pueden ser mostrados en páginas web, o vice versa). Se enfrentará a menudo con él, así que este artículo le entrega todo lo que necesita saber para trabajar con JSON utilizando JavaScript, incluyendo el análisis JSON para acceder a los datos en su interior, y cómo crear JSON.

// El objeto JSON contiene métodos para analizar JavaScript Object Notation (JSON) y convertir valores a JSON. No puede ser llamado o construído, y aparte de estas dos propiedades, no tiene funcionalidad interesante por sí mismo.

const json = {
  cadena: "Jon",
  numero: 35,
  booleano: true,
  arreglo: ["correr", "programar", "cocinar"],
  objeto: {
    twitter: "@jonmircha",
    email: "jonmircha@gmail.com",
  },
  nulo: null,
};
console.log(json);

console.log(JSON);

console.log("Ejemplo de el método .parse()");
//El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente  el valor producido por el análisis. Es decir convierte .una cadena de texto como JSON a un valor válido en Javascript.

// Aquí en el primer caso nos imprime una cadena de texto con las dos llaves {} pero en el segundo caso nos imprime un objeto Javascript.
console.log("{}");
console.log(JSON.parse("{}"));
// Aquí en el primer caso nos imprime una cadena de texto con "[1,2,3]" y en el segundo caso un array.
console.log("[1,2,3]");
console.log(JSON.parse("[1,2,3]"));
// Aquí en el primer caso nos imprime una cadena de texto con "true" y en el segundo caso un valor booleano (true).
console.log("true");
console.log(JSON.parse("true"));
// Aquí en el primer caso nos imprime una cadena de texto con "19" y en el segundo caso un valor numérico (19).
console.log("19");
console.log(JSON.parse("19"));

//------------------------------------------------------------------------------------------------------------------------------------------

console.log("Ejemplo de el método .stringify()");
// El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON, opcionalmente reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades mediante un array de reemplazo. Es decir lo CONTRARIO al método .parse()

// Aquí en el primer caso nos imprime un objeto Javascript pero en el segundo caso nos imprime una cadena de texto con las llaves {}.
console.log({});
console.log(JSON.stringify({}));
// Aquí en el primer caso nos imprime un array [1,2,3] y en el segundo una cadena de texto con "[1,2,3]".
console.log([1, 2, 3]);
console.log(JSON.stringify([1, 2, 3]));
// Aquí en el primer caso nos imprime un valor booleano true y en el segundo caso una cadena de texto con "true".
console.log(true);
console.log(JSON.stringify(true));
// Aquí en el primer caso nos imprime un número 19 y en el segundo caso una cadena de texto con "19".
console.log(19);
console.log(JSON.stringify(19));

// Aquí pasamos el objeto Javascript definido al principio a una anotación JSON.
console.log(JSON.stringify(json));

// Y aquí viceversa, lo que nos acaba de devolver la consola como una anotación JSON lo volvemos a pasar a un objeto Javascript. Importante envolverlo todo en comillas simples '{"propiedad": "valor"}' ya que las propiedades estan con comillas dobles y que todo el string que le pasamos al método parse() este en una sola línea.
console.log(
  JSON.parse(
    '{"cadena":"Jon","numero":35,"booleano":true,"arreglo":["correr","programar","cocinar"],"objeto":{"twitter":"@jonmircha","email":"jonmircha@gmail.com"},"nulo":null}'
  )
);
