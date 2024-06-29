//Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludar(){
    console.log("¡Hola, mundo!")
};

saludar();

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function saludarNombre(nombre){
    console.log("¡Hola, !" + nombre);
};

saludarNombre("Pedro");

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function dobleNum(num){
    let doble = num * 2;
    return doble;
};

dobleNum(2);


//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioNums(n1,n2,n3){
    let suma = n1 + n2 + n3;
    let prom = suma / 3;
    return prom;
};

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function numeroMayor(n1,n2){
    let mayor;
    if(n1>n2){
        mayor = n1;
    }else if(n2<n1){
        mayor = n2;
    }else{
        console.log(n1 +" y " + n2 + " son iguales");
    }
    return mayor;
}

console.log(numeroMayor(5,5))

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function multiplicacionMismo(n1){
    let multiplicacion = n1 * n1;

    return multiplicacion;
}

console.log(multiplicacionMismo(5));