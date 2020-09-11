//          **************************------------------- Video 60 WEB APIs -------------------**************************

// Ejemplo muy sencillo de una de las tantas WEB APIs. En este caso speechSynthesis reproduce un texto en un sonido.
let texto = "Hola soy tu amigo y docente digital Jonathan MirCha";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto);
