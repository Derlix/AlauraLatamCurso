//Desafíos

//1. Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".

let mensaje = "¡Bienvenida y bienvenido a nuestro sitio web!";
alert(mensaje);

//2. Declara una variable llamada nombre y asígnale el valor "Luna".

let nombre;
nombre = "Luna";

//3. Crea una variable llamada edad y asígnale el valor 25.

let edad = 25;

//4. Establece una variable numeroDeVentas y asígnale el valor 50.

let numeroDeVentas = 50;

//5. Establece una variable saldoDisponible y asígnale el valor 1000.

let saldoDisponible = 1000;

//6. Muestra una alerta con el texto "¡Error! Completa todos los campos".

let mensaje01 = prompt("Ingresa un texto:")

let alerta = "¡Error! Completa todos los campos";

if(mensaje01 == ""){
    alert(alerta);
}else{
    alert("Campos llenados con exito");
}

//7. Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .

let mensajeDeError =  "¡Error! Completa todos los campos";

alert(mensajeDeError);

//8. Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .

let nombre8 = prompt("Ingresa tu nombre");

//9. Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
let edad9 = ("Ingresa tu edad por favor");

//10. Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".

if(edad9>=18){
    alert("¡Puedes obtener tu licencia de conducir!");
}