//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numPrimo = (numero) => {
    if (!numero) return console.warn("No has introducido ningún número");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" no es un número`);
    if(Math.sign(numero) === -1) return console.error("Introduzca un número positivo");
    if(numero === 0) return console.error("El número no puede ser 0");
    if(numero === 1) return console.error("El número no puede ser 1")

    let limit = Math.round(Math.sqrt(numero))
    for (let i = 2; i<= limit; i++){
        if(numero % i === 0) return console.log(`El número ${numero} NO es un número primo`);
    }
    return console.log(`El número ${numero} SI es un número primo`)
}
//numPrimo();
//numPrimo("hola")
//numPrimo(-29);
//numPrimo(10);
//numPrimo(11);

/* Para resolver este ejercicio primero he realizado algunas comprobaciones 1-Que no nos hayan pasado ningún número a evaluar 2-Que el valor introducido sea del tipo number 3-Que el valor introducido sea un númeor positivo 4-Que el número no sea 0 4- Que el número no sea 1. 
Después declaro una variable con la raíz cuadrada del número introducido redondeandolo al número entero más cercano para utilizarlo como límite ene l for. En el cúal le diré que i vale 2 y mientras i sea igual o menor al limite que definí anteriormente aumente i en 1 y vaya comprobando que el si número introducido por el usuario dividido por lo que valga i en esa vuelta vale 0, si el resultado es true en alguna de las vueltas quiere decir que el número no es primo ya que es divisible por más números que por si mismo o 1. Si no encuentra ningún caso true en el for quiere decir que sí es un número primo porque solo es divisible por si mismo y 1. */





// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const numPar = (numero) => {
    if (!numero) return console.warn("No has introducido ningún número");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" no es un número`);

    if(numero%2 === 0) return console.log(`El número ${numero} es PAR`);
    return console.log(`El número ${numero} es IMPAR`);
};
//numPar();
//numPar("hola");
//numPar(-2);
//numPar(10);
//numPar(11);

/* Para resolver este ejercicio primero hago algunas comprobaciones 1-Que no nos hayan pasado ningún número a evaluar 2-Que el valor introducido sea del tipo number. Después compruebo en un if que numero%2 sea igual a 0 en tal caso envio un meensaje diciendo que el número es PAR y si no otro diciendoq ue el número es IMPAR. */





// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const conversor = (numero, tipo) => {
    grados = tipo;
    if (!numero) return console.warn("No has introducido ningún número");
    if (!tipo) return console.warn("No has introducido ningún tipo de grado");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" no es un número`);
    if (tipo.toUpperCase() !== "C" && tipo.toUpperCase() !== "F") return console.error (`El tipo de grados "${tipo}" no es válido, introduca grados C o F`);

    if (tipo.toUpperCase() === "C"){
        fahrenheit = numero*(9/5)+32;
        return console.log(`${numero}º${tipo.toUpperCase()} son ${fahrenheit}ºF`);
    }else {
        celsius = ((numero - 32) * 5/9).toFixed(2);
        return console.log(`${numero}º${tipo.toUpperCase()} son ${celsius}ºC`);
    }   
};
conversor();
conversor(5)
conversor("hola", "C");
conversor(5, "A");
conversor(5, "C");
conversor(6, "c");
conversor(9, "F")
conversor(10, "f");

/* Para resolver este ejercicio primero hago algunas comprobaciones 1-Que no nos hayan pasado ningún número de grados 2-Que no nos hayan pasado ningún tipo de grado 3-Que el valor del parametro numero sea del tipo number 4-Que el valor del parametro tipo sea o C/c o F/f.
A continuación si el valor del parámetro tipo es c/C aplico al parametro numero la formula para pasar de grados C a grados F y lo guardo en la variable fahrenheit y muestro por consola la conversión.
Por el contrario si el valor dle parámetro tipo es f/F aplico al parametro numero la formula para pasar de grados F a grados C y lo guardo en la variable celsius y muestro por consola la conversión */