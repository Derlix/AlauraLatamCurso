// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java','Ruby','GoLang');
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function verLista(){
    console.log(lenguagesDeProgramacion);
}

verLista();

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function verLista(){
    console.log(lenguagesDeProgramacion.reverse());
}

verLista();

// Crea una función que calcule el promedio de los elementos en una lista de números.
let listaPromedio = [1, 2, 3];

function calcularPromedioLista() {
    let suma = 0;
    for (let i = 0; i < listaPromedio.length; i++) {
        suma += listaPromedio[i];
    }
    let promedio = suma / listaPromedio.length;
    console.log(promedio);
}

calcularPromedioLista();

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
let listaNumeros = [1, 5, 10];

function numeroGP(lista) {
    if (lista.length === 0) {
        console.log("La lista esta vacia");
        return;
    }

    let mayor = lista[0];
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }

    console.log(`El numero mas grande es: ${mayor}`);
    console.log(`El numero mas pequeño es: ${menor}`);
}

numeroGP(listaNumeros);

// Crea una función que devuelva la suma de todos los elementos en una lista.
listaSuma = [1,5,6]

function sumaElementos(){
    let suma = 0;
    for (let i = 0; i < listaSuma.length; i++) {
        suma += listaSuma[i];
    }

    console.log(suma);
}

sumaElementos();

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function encontrarPosicion(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i;  
        }
    }
    return -1;  
}


let listaEjemplo = [1, 5, 10, 3, 7];
let posicion = encontrarPosicion(listaEjemplo, 10);
console.log(`La posición de 10 en la lista es: ${posicion}`); 

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        console.log("Las listas no tienen la misma longitud.");
        return null;
    }

    let sumaLista = [];
    for (let i = 0; i < lista1.length; i++) {
        sumaLista.push(lista1[i] + lista2[i]);
    }
    return sumaLista;
}


let lista1 = [1, 2, 3];
let lista2 = [4, 5, 6];
let listaSuma = sumarListas(lista1, lista2);
console.log("La suma de las listas es:", listaSuma); 


// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function obtenerCuadrados(lista) {
    let listaCuadrados = [];
    for (let i = 0; i < lista.length; i++) {
        listaCuadrados.push(lista[i] ** 2);
    }
    return listaCuadrados;
}


let listaNumero = [1, 2, 3, 4, 5];
let listaCuadrados = obtenerCuadrados(listaNumero);
console.log("Lista original:", listaNumero);
console.log("Lista de cuadrados:", listaCuadrados);  
