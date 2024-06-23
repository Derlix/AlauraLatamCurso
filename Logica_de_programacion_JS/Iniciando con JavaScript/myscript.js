//Variables

let numeroSecreto = 5;
let contador = 1;
let numeroDeUsuario = 0;
let palabraVeces = 'intento';

/* Este codigo realiza la comparacion*/

while(numeroSecreto != numeroDeUsuario){
    numeroDeUsuario = prompt("Ingresa un numero por favor: ");

    console.log("Numero ingresado:" + numeroDeUsuario);

    if (numeroDeUsuario == numeroSecreto){
        //Si entro por aca significa que acertamos y la condicion 
        alert(`Acertaste, el numero es: ${numeroDeUsuario} ${palabraVeces}: ${contador}`);
    }else{
        if(numeroDeUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('El numero secreto es mayor');
        }
        palabraVeces = 'intentos';
        //Incrementamos el contador cuando no acierta
        contador = contador + 1;
        //si entro por aca significa que la condicion no se cumplio 
        //alert('No acertaste el numero')
    }
    
}



// let numero1 = 11

// let numeroAencontrar =Math.floor(Math.random() * 10);


// while(numero1!=numeroAencontrar){

//     let numero1 = prompt("Ingresa un numero por favor:");

//     if(numero1 == numeroAencontrar){
//         alert('Has encontrado el numero correcto' + numeroAencontrar );
//         break;
//     }else{
//         alert('Sigue intenando');
        
//     }
// }


