// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function IMC(altura, peso) {
    let Imc = peso / (altura * altura);
    console.log(`Tu índice de IMC es ${Imc}`);
}

IMC(1.65, 8);

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(num) {
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }
    console.log(`El factorial de ${num} es ${resultado}`);
}


factorial(5);
// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function cambioMoneda(valor){

    let precioReal = 5.59;

    console.log(precioReal * valor)
 
}
cambioMoneda(5)

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function salaRectangular(altura, anchura) {
    let area = altura * anchura;
    let perimetro = 2 * (altura + anchura);
    console.log(`El área de la sala rectangular es ${area}`);
    console.log(`El perímetro de la sala rectangular es ${perimetro}`);
}

salaRectangular(5, 10); 


// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function salaCircular(radio) {
    const pi = 3.14;
    let area = pi * radio * radio;
    let perimetro = 2 * pi * radio;
    console.log(`El área de la sala circular es ${area}`);
    console.log(`El perímetro de la sala circular es ${perimetro}`);
}

salaCircular(7); 


// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function multiplicacion(num){
    if(num ===0){
        console.log("Todo numero multiplicado por 0 es 0")
    }else{
        
    for(let i = 1; i <=10;i++){
        console.log(num * i)
    }
    }
}

//multiplicacion(10);