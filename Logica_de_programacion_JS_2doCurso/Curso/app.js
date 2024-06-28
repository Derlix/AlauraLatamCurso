let numeroSecreto = generarNumeroSecreto(10);
let intentos = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);

    elementoHTML.innerHTML = texto;
};

function generarNumeroSecreto(max){
    return Math.floor(Math.random()*max) +1;
    
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroDeUsuario===numeroSecreto);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
};

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionsIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    mensajesIniciales();
    numeroSecreto = generarNumeroSecreto(10);
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar la caja 
    limpiarCaja();
    //Indicar mensaje de inicio
    //Generar el numero Aleatorio
    //Desabilitar el boton de nuevo juego
    condicionsIniciales();
    //Iniciar el numero intentos 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionsIniciales();