function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length

    return promedioLista;
}

//Creamos arreglo
const lista1 = [
    100,
    200,
    500,
    400000000
]; 

//Calculamos la mitad del arreglo
const mitadLista1 = parseInt(lista1.length / 2);

//Función que revisa si un número es par o impar
function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana = 0;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1]; //Si es par la lista, usamos esto, para que nos traiga el elemento de la mitad 
    const elemento2 = lista1[mitadLista1]; //Y le restamos 1 para calcular el elemento anterior

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1, //Agregamos los elementos dentro de un array
        elemento2,
    ])
    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1];
}

//Función para calcular mediana de cualquier arreglo
function calcularMediana(list) {
    const middleList = parseInt(list.length / 2);

    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    function promedio(lista) {
        const sumaLista = lista.reduce(
            function(valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
            }
        );
    
        const promedioLista = sumaLista / lista.length
    
        return promedioLista;
    }

    let mediana = 0;

    if (esPar(list.length) === true) { //Si o si comparar para validar la función del par o impar
        const elemento1 = list[middleList - 1]; 
        const elemento2 = list[middleList]; 
    
        const promedioElemento1y2 = promedio([
            elemento1, 
            elemento2,
        ]);
        mediana = promedioElemento1y2;
        console.log(mediana);
    } else {
        mediana = list[middleList];
        console.log(mediana);
    }
}

const prueba = [
    800,
    250,
    300,
    1000,
];

const prueba2 = [
    300,
    100,
    400,
    600,
    200,
];

