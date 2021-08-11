function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length

    return promedioLista;
}

const lista1 = [
    100,
    200,
    500,
    400000000
]; 

const mitadLista1 = parseInt(lista1.length / 2);

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