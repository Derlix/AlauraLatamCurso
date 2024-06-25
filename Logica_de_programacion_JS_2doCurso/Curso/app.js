let numeroSecreto = generarNumeroSecreto(500);


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);

    elementoHTML.innerHTML = texto;
};

function generarNumeroSecreto(max){
    return Math.floor(Math.random()*max) +1;
    
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario===numeroSecreto);
    return;
};

asignarTextoElemento('h1','Juego del numero secreto');

asignarTextoElemento('p','Indica un numero del 1 al 10');