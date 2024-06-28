
let numeroMaximo = 10;
let listaNumerosSortados = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);

    elementoHTML.innerHTML = texto;
};

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1;
    console.log(numeroGenerado);
    console.log(listaNumerosSortados);
    //Si ya sortemamos todo los numeros
    if(listaNumerosSortados.length == numeroMaximo){
        asignarTextoElemento('p','Ya sesortearon todos los numeros posibles');
    }else{
        if(listaNumerosSortados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSortados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
    
    
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
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
    intentos = 1;
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
   
}

function reiniciarJuego(){
    //Limpiar la caja 
    limpiarCaja();
    //Indicar mensaje de inicio
    //Generar el numero Aleatorio
    //Desabilitar el boton de nuevo juego
    condicionsIniciales();
    //Iniciar el numero intentos 
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionsIniciales();