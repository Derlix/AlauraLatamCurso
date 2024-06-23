// Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaSemana = prompt("Ingresa un dia de la semana:");

if(diaSemana.toLocaleLowerCase() == "sabado" || diaSemana.toLocaleLowerCase() == "domingo"){
    alert("¡Buen fin de semana!");
}else{
    alert("¡Buena semana!");
}

// Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let numeroUsuario = prompt("Ingresa un numero para determinar si es positivo o negativo");

if(numeroUsuario > 0 ){
    alert(`${numeroUsuario} es un numero positivo`)
}else if(numeroUsuario < 0){
    alert(`${numeroUsuario} es un numero negativo`)
}else{
    alert(`${numeroUsuario} es 0`)
}

// Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

let puntuacion  = prompt(" Ingresa la puntuacion: ");

if(puntuacion >= 100){
    alert(`Tu puntuacion es de: ${puntuacion} has ganado!`)
}else{
    alert(`Tu puntuacion es de: ${puntuacion} necesitas 100 para ganar`)
}

// Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

let saldo = prompt("Ingresa el saldo de tu cuenta")

alert(`Tu saldo es de ${saldo}`);

// Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt(" Ingresa tu nombre: ");

alert(`Bienvenido al sistema ${nombre}`);
