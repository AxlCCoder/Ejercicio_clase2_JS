/*
Crear un cuestionario de 10 preguntas. Mostrar cada pregunta una por una y al final mostrar la respectiva
pregunta con la respuesta ingresada por el usuario
Que al menos 2 preguntas sean de opcion multiple
Que al menos 2 preguntas sean respuesta de valores numericos
Cada pregunta debe tener la respuesta en el comentario del codigo
Agregar cada respuesta correcta dentro de una variable
*/
// Cuestionario de 10 preguntas

let respuestasCorrectas = 0;
const respuestasUsuario = [];


const pregunta1 = "1. ¿Cual es la capial de Brasil?\nA) Ciudad de México \nB) Chetumal \nC) Rio de Janeiro \nD)Buenos Aires";
let respuesta1 = prompt(pregunta1);
respuestasUsuario.push({pregunta: pregunta1, respuesta: respuesta1});
// respuesta C
const pregunta2 = "2. ¿Cuantos dias tiene la semana?";
let respuesta2 = parseInt(prompt(pregunta2));
respuestasUsuario.push({pregunta: pregunta2, respuesta: respuesta2});
// respuesta 7
const pregunta3 = "3. ¿Cual es el 3er planeta de nuestro sistema solar?"
let respuesta3 = prompt(pregunta3)
respuestasUsuario.push({pregunta: pregunta3, respuesta: respuesta3});
// respuesta: tierra
const pregunta4 = "4. ¿Cuantos dias tiene un año bisiesto?" ;
let respuesta4 = prompt(pregunta4);
respuestasUsuario.push({pregunta: pregunta4, respuesta: respuesta4})
// respuesta 365
const pregunta5 = "5. ¿Cual es el a estrella del centro de nuestro sistema solar?";
let respuesta5 = prompt(pregunta5);
respuestasUsuario.push({pregunta: pregunta5, respuesta: respuesta5})
// respuesta sol
const pregunta6 = "6. ¿Cuantos oceanos hay en el mundo?";
let respuesta6 = prompt(pregunta6);
respuestasUsuario.push({pregunta: pregunta6, respuesta: respuesta6})
// respuesta 5
const pregunta7 = "7. ¿Cual es el organo mas grande del cuerpo humano?";
let respuesta7 = prompt(pregunta7);
respuestasUsuario.push({pregunta: pregunta7, respuesta: respuesta7});
// respuesta Piel
const pregunta8 = "8. ¿En que año llego por primera vez el hombre a la luna?";
let respuesta8 = prompt(pregunta8);
respuestasUsuario.push({pregunta: pregunta8, respuesta: respuesta8});
// respuesta 1969
const pregunta9 = "9. ¿Cual es el animal mas grande del mundo? \nA)Ballena azul \nB)Elefante \nC)Jirafa \nD)Dinosaurio";
let respuesta9 = prompt(pregunta9);
respuestasUsuario.push({pregunta: pregunta9, respuesta: respuesta9});
// respuesta D
const pregunta10 = ("10. ¿Cual es el organo del cuerpo humano capaz de desintoxicar nuestro cuerpo? \nA)Higado \nB)Pancreas \nCPulmones \nD)Tiroides")
let respuesta10 = prompt(pregunta10);
respuestasUsuario.push({pregunta: pregunta10, respuesta: respuesta10});
// respuesta A

const respuestasCorrectasArray = [
    "C",
    7,
    "tierra",
    365,
    "sol",
    5,
    "piel",
    1969,
    "D",
    "A"
];

console.log("===Resultado del cuestionario===");
for (let i = 0; i < respuestasUsuario.length; i++) {
    console.log(`\n${respuestasUsuario[i].pregunta}`);
    console.log(`Tu respuesta: ${respuestasUsuario[i].respuesta}`);
    console.log(`Respuesta correcta: ${respuestasCorrectasArray[i]}`);
// verificar si la respuesta es correcta
let esCorrecta = false;
if (typeof respuestasCorrectasArray[i]==='number'){
    esCorrecta = parseInt(respuestasUsuario[i].respuesta)=== respuestasCorrectasArray[i];
} else {
    esCorrecta = respuestasUsuario[i].respuesta.toLowerCase() === respuestasCorrectasArray[i].toLowerCase();
}


if (esCorrecta) {
        console.log("✅ Correcta");
        respuestasCorrectas++;
    } else {
        console.log("❌ Incorrecta");
    }
}
// Mostrar puntuación final
console.log(`\n=== PUNTUACIÓN FINAL ===`);
console.log(`Respuestas correctas: ${respuestasCorrectas} de 10`);
console.log(`Porcentaje: ${(respuestasCorrectas / 10 * 100).toFixed(1)}%`);

// Alerta final con el resumen
alert(`Cuestionario completado!\nObtuviste ${respuestasCorrectas} de 10 respuestas correctas (${(respuestasCorrectas / 10 * 100).toFixed(1)}%)`);
