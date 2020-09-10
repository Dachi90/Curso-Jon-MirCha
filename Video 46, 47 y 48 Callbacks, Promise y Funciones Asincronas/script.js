// * Si todos códgidos estan operativos se pueden superponer una ejecución a la otra ya que son códigos asincronos. Comenta uno para ver el funcionamiento limpio de cada uno.


// ------------------ Callbacks ------------------------

/* function cuadradoCallback(value,callback){
   setTimeout(() => {
      callback(value, value*value);
   },0 | Math.random()*1000);
}

cuadradoCallback(0,(value,result)=> {
   console.log("Inicia Callback");
   console.log(`Callback: ${value}, ${result}`);
   cuadradoCallback(1,(value,result)=> {
      console.log(`Callback: ${value}, ${result}`);
      cuadradoCallback(2,(value,result)=> {
         console.log(`Callback: ${value}, ${result}`);
         cuadradoCallback(3,(value,result)=> {
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(4,(value,result)=> {
               console.log(`Callback: ${value}, ${result}`);
               cuadradoCallback(5,(value,result)=> {
                  console.log(`Callback: ${value}, ${result}`);
               });
            });
         });
      });
   });
}); */





// ------------------ Promise ------------------------

/* function cuadradoPromise(value){
   if(typeof value !== "number"){
      return Promise.reject(`Error, el valor "${value}" ingresado no es un número`);
   }

   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve({
            value: value,
            result: value*value
         });
      },0 | Math.random()*1000)
   });
}

cuadradoPromise(0)
   .then(obj => {
      console.log(`Inicio Promise`);
      console.log(`${obj.value}, ${obj.result}`);
      return cuadradoPromise(1);
   })
   .then(obj => {
      console.log(`${obj.value}, ${obj.result}`);
      return cuadradoPromise(2);
   })
   .then(obj => {
      console.log(`${obj.value}, ${obj.result}`);
      return cuadradoPromise(3);
   })
   .then(obj => {
      console.log(`${obj.value}, ${obj.result}`);
      return cuadradoPromise("4");       // Aquí al pasarle un valor que no es de tipo "number" no lo valida y ejecuta el .catch con el correspondiente error
   })
   .then(obj => {
      console.log(`${obj.value}, ${obj.result}`);
      return cuadradoPromise(5);
   })
   .then(obj => {
      console.log(`${obj.value}, ${obj.result}`);
      console.log(`Fin Promise`);
   })
   .catch(err => console.error(err)); */




   

// ------------------ Funciones asíncronas  ------------------------

function cuadradoPromise(value){
   if(typeof value !== "number"){
      return Promise.reject(`Error, el valor "${value}" ingresado no es un número`);
   }

   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve({
            value: value,
            result: value*value
         });
      },0 | Math.random()*1000)
   });
}

//Con el operador "async" definimos una función asincrona. En este caso es una función ASINCRONA DECLARADA.
/* async function funcionAsincronaDeclarada () {
   try {
      console.log("Incio de Async Function Declarada");
      let obj = await cuadradoPromise(0); 
      console.log(`Async Function: ${obj.value}, ${obj.result}`);
      // Con la palabra reservada "await" esperamos el resultado de una Promise para ejecutar la siguient función. Solo puede ser usada dentro de una async function.

      obj = await cuadradoPromise(1);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise(2);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise(3);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise(4);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise("5");
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      console.log("Fin de Async Function Declarada");
   } catch (err) {
      console.error(err);
   }
}

funcionAsincronaDeclarada(); */

// Este seria mismo ejemplo que el anterior pero con una función ASINCRONA EXPRESADA. En este el operador "async" hay que escribirlo antes de la declaración de la arrow function. Y de igual manera el operador await SOLO se puede utilizar si la función es ASINCRONA ya sea expresada o declarada.

const funcionAsincronaExpresada = async () => {
   try {
      console.log("Incio de Async Function Expresada");

      let obj = await cuadradoPromise(6); 
      console.log(`Async Function: ${obj.value}, ${obj.result}`);
      // Con la palabra reservada "await" esperamos el resultado de una Promise para ejecutar la siguient función. Solo puede ser usada dentro de una async function.

      obj = await cuadradoPromise(7);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise(8);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise("9");
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise(10);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      console.log("Fin de Async Function Expresada");
   } catch (err) {
      console.error(err);
   }
}

funcionAsincronaExpresada();