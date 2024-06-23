// Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

console.log("Bienvenida");

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
var nombre = prompt("Ingresa tu nombre");

console.log(`Hola ${nombre}`);

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

var nombre1 = prompt("Ingresa tu nombre");

alert(`Hola ${nombre1}`);

// Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

var lenguajeFavorito = prompt(" Ingresa tu lenguaje favorito");
console.log(`Tu lenguaje favorito es ${lenguajeFavorito}`);

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor1 = 10;
let valor2 = 5;

let resultado = valor1 + valor2;

console.log(`La suma de ${valor1} y ${valor2} es: ${resultado}`);

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

let resultadoResta = valor1 - valor2;

console.log(`La diferencia entre ${valor1} y ${valor2} es igual a: ${resultadoResta}`);

// Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let edad = parseInt(prompt(" Ingresa tu edad: "));

if ( edad >= 18 ){
    console.log(`Eres mayor de edad :D tienes ${edad}`);
}else{
    console.log(`No eres mayor de edad :C tienes ${edad}`);
};

// Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numero = parseInt(prompt(" Ingresa un numero para determinar si es negativo,positivo o 0"));

if(numero >0){
    console.log(`${numero} es un numero positivo`);
}else if(numero<0){
    console.log(`${numero} es un numero negativo`);
}else{
    console.log(`${numero} es 0`);
};

// Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let contador = 0;
while(contador >10){
    console.log(contador);
    contador++;
};


// Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

let nota = 10;

if(nota>=7){
    console.log(`${nota} es mayor a 7 por lo tanto APROBASTE`);
}else{
    console.log(`${nota} es menor a 7 por lo tanto REPROBASTE`);
};
// Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

console.log(Math.floor(Math.random()*100)+1);

// Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

console.log(Math.floor(Math.random()*10)+1);

// Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

console.log(Math.floor(Math.random()*1000)+1);