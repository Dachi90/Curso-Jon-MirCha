/*

*/


// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const decimalBinario = (numero = undefined, base = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste el número a convertir");
    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado NO es un número`);
    if(base === undefined) return console.warn("No ingresaste la base a convertir");
    if(typeof base !== "number") return console.error(`El valor "${base}" ingresado NO es un número`);

    if(base === 2){
        return console.info(`el número binario ${numero} en décimal es igual a ${parseInt(numero, base)}`);
    }else if (base === 10){
        return console.info(`el número decimal ${numero} en binario es igual a ${numero.toString(2)}`);
    } else {
        return console.error("El número de base a convertir NO es válido.");
    }
}
//decimalBinario();
//decimalBinario("2");
//decimalBinario(100);
//decimalBinario(100, "2");
//decimalBinario(101, 2);
//decimalBinario(5, 10);
//decimalBinario(5, 8);

/* Para resolver este ejercicio primero defino unas comprobaciones 1- Que el primer parámetro(numero) no este vacio. 2- Que el valor que recibimos para el primer parámetro (número) sea de tipo number. 3- Que el segundo parámetro (base) no este vacio. 4- Que el valor que recibimos del segundo pa´rametro (base) sea de tipo number.
Entonces si el número que recibimos para el parámetro base es 2 utilizamos el método parseInt() y le pasamos como primer parámetro nuestro parámetro número y como segundo nuestro parámetor base y lo mostramos por consola. 
Pero si el número que recibimos para el parámetro base es 10 entonces utilizamos el método .toSting() en nuestro parámetro numero y le pasamos como parámetro 2, para que lo convierta a un número con base 2 --> numero.toString(2) 
Y para terminar tenemos un último else donde le decímos que el número base a convertir no es válido. Aquí podriamos seguir anidando if else y convertir números con otras bases como la octal o hexadecimal*/





// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const descuento = (pvp = undefined, descuento = 0) => {
    if(pvp === undefined) return console.warn("No ingresaste el número a convertir");
    if(typeof pvp !== "number") return console.error(`El valor "${pvp}" ingresado NO es un número`);
    if(Math.sign(pvp)=== -1) return console.error("Ingrese un valor positivo como pvp.");
    if(typeof descuento !== "number") return console.error(`El valor "${descuento}" ingresado NO es un número`);
    if(Math.sign(descuento)=== -1) return console.error("Ingrese un valor positivo como descuento.");
    if(descuento >100) return console.error("El descuento tiene que ser menor o igual a 100");

    return console.log(`El artículo valía ${pvp}€ y tiene un descuento del ${descuento}%. El precio final es de ${pvp - (pvp * descuento) / 100}€`)
}
//descuento();
//descuento("1000", 20); 
//descuento(-1000, 20);
//descuento(1000);
//descuento(1000, "20");
//descuento(1000, -20);
//descuento(1000, 101);
//descuento(1000, 20);

/* Para resolver este ejercicio primero defino unas comprobaciones 1- Que el parámetro pvp no este vacío. 2- Que el valor recibido para el parámetro pvp sea de tipo number. 3- Que el valor recibido para el parámetro pvp sea un número positivo. 4- Que el parámetro descuento no este vacío. 5- Que el valor recibido para el parámetro descuento sea del tipo number. 6- Que el valor recibido para el parámetro descuento sea un número positivo. 7- Que el valor recibido para el parámetro descuento no sea mayor que 100.
Después aplico la formula para saber el porcentaje de una cifra y se la resto al pvp para saber el precio con el descuento aplicado --> pvp - (pvp / 100) * descuento y lo imprimo por consola mostrando el preico original, el % de descuento y el precio final.*/





// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios = (fecha = undefined) => {
    if(fecha === undefined) return console.warn("No ingresaste la fecha.");
    if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha válida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    let aniosEnMilisegundos = 1000 * 60 * 60 * 24 * 365 //Con esta formula guardamos la cantidad de milisegundos que transcurren en un año. 1000 milisegundos es igual a 1 segundo, si lo multiplicamos por 60 no da la cantidad de milisegundos en un minuto, si lo volvemos a multiplicar por 60 nos da la cantidad de milisegundos en una hora, si lo multiplicamos por 24 la cantidad de milisegundos en un día y si lo multiplicamos por 365 nos da la cantidad de milisegundos en un año.
    let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMilisegundos);

    return (Math.sign(aniosHumanos) === -1)
    ?console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
    :(Math.sign(aniosHumanos) === 1)
        ? console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}.`)
        :console.info(`Estamos en el años actual ${fecha.getFullYear()}.`)
}

calcularAnios();
calcularAnios({});
calcularAnios(new Date(2050,10,19));
calcularAnios(new Date(1990,10,19));
calcularAnios(new Date());

/* Para resolver este problema primero realizo una comprobaciones 1-Que el parámetro fecha no este vacio 2-Que el valor del parámetro fecha sea de tipo object.date si es de otro tipo mostrará el mensaje de error.
Después declaro una variable en la que obtendre el tiempo en milisegundos entre la fecha de hoy y la fecha ingresada por el usuario, el método .getTime nos la convierte a milisegundos.
La siguiente variable calculo la cantidad de milisegundo que tiene un año (Hay un comentario explicativo en la declaración de la variable) SIN TENER EN CUANTA LOS AÑOS VICIESTOS
Y en la siguiente variable guardo el resultado de dividir la diferencia que teniamos en la primera variable entre la segunda variable donde tenemos la cantidad de milisegundo de un año, con lo que obtenemos la cantidad de años que hay de diferencia entre una fecha y otra. Redondeandolo al número entero inferior con lo que conseguimos que si el día de la fecha del usuario no ha llegado aún no cuente un año entero
Entonces si en la variable donde tengo la cantidad de años de diferencia tengo un valor negativo quiere decir que aún hemos llegaod a la fecha que el usuario ingreso por lo tango mostramos un mensaje diciendole que faltan los años que teemos guardado en la variable para que llegue ese año, PERO QUITANDOLE el simbolo negativo con Math.abs(variableConLosMilisegundos)
Si no es el caso anterior compruebo si el valor de la variable donde tengo la cantidad de años de diferencia es positva, si es así mostramos un mensaje con la cantidad años que pasaron de la fecha ingresada por el usuario hata hoy
Por último si no es ninguno de los casos anteriores quiere decir que el valor de la variable donde tengo la cantidad de años de diferencia es 0, con lo cúal mostramos un mensaje diciendo que estamos en el año de la fecha que ingreso el usuario.
*/


