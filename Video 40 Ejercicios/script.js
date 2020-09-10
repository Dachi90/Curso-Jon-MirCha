// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const vocalesConsonantes = (palabra = "") => {

if (!palabra) return console.error("Introduzca una palabra o frase.");
if (typeof palabra !== "string") return console.error(`El valor introducido ${palabra} no es válido. Por favor introduzca una palabra o frase.`);

let vocales = ["a","e","i","o","u","á","é","í","ó","ú"];
let consonantes = ["b","c","d","f","g","h","j","k","l","m","n","ñ","p","q","r","s","t","v","w","x","y","z"];
let contadorVocales = 0;
let contadorConsonantes = 0;
let otrosCaracteres = 0;
let arrayDePalabra = palabra.toLowerCase().split("");
console.log(arrayDePalabra)

    for (let i= 0; i<arrayDePalabra.length; i++){
        if(vocales.indexOf(arrayDePalabra[i]) !== -1){
            contadorVocales ++;
        }else if (consonantes.indexOf(arrayDePalabra[i]) !== -1){
            contadorConsonantes ++;
        }else {
            otrosCaracteres ++
        }
    }
    return console.info(`La frase ingresada tiene ${contadorVocales} vocales, ${contadorConsonantes} consonantes y ${otrosCaracteres} signos de puntuación o espacios.`)
}
//vocalesConsonantes();
//vocalesConsonantes(123);
//vocalesConsonantes("Hola Mundo");

/* Para resolver este ejercicio primero hago unas comprobacios 1-Que el parámetro palabra no este vacío. 2-Que el valor del parámetro palabra sea del tipo string. Después me creo un array con las vocales y las vocales acentuadas, luego creo otra con las consonantes. Tambien creo 3 variables con valor 0 en las cuales iré sumando si es una vocal, consonante o otro tipo de caracter(signos de puntuación espacios en blanco, etc..). Después me creo un array a partir del parametro palabra, es decir de la palabra o frase que introdujo el usuario, utilizando el método .toLowerCase() para que este todo en minusculas y evitar problmas y el método .split("") para crear el array con cada caracter en una posición diferente.
Por último hago un bucle for en el cúal recorro el array de la palabra/frase introducida por el usuario y busco si el caracter de esa posicion está dentro de el array de vocales. Si es así sumo 1 al contador de vocales. Si no es así hago el mismo procedimiento pero buscandolo en el array de consonantes y sumandolo al contador de consonantes. Si no esta dentro del array de vocales ni el de consonantes quiere decir que es otro tipo de caracter como espacios en blanco o signos de puntuación con lo cual lo sumo al contador de otros caracteres.
Y para finalizar contruyo una frase diciendole al usuario cuantas vocales, consonantes y otros caracteres tiene su frase/palabra usando el resultado de los contadores.
*/





// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validaNombre = (nombre = "") => {
    if (!nombre) return console.error("No ingresaste un nombre");
    if (typeof nombre !== "string") return console.error(`El valor ${nombre} no es válido. Por favor introduzca un nombre.`);

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

    return (expReg)
        ?console.info(`${nombre}, es un nombre válido.`)
        :console.warn(`${nombre}, NO es válido.`);
}

validaNombre();
validaNombre(123);
validaNombre("Juan Carlos");
validaNombre("mar-tín")





// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validaEmail = (email = "") => {
    if (!email) return console.error("No ingresaste un email");
    if (typeof email !== "string") return console.error(`El valor ${email} no es válido. Por favor introduzca un email.`);

    let expReg = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    return (expReg)
    ?console.info(`${email}, es un email válido.`)
    :console.warn(`${email}, NO es válido.`);
}

validaEmail();
validaEmail(34);
validaEmail("ejem,,plo,mal@gmail.com");
validaEmail("ejemplo_bien@gmail.com");