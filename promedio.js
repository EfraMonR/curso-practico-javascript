const lista1 = [
    100,
    200,
    300,
    500,
];


function calcularMediaAritmetica(lista) {
    /*let sumaLista = 0;
    for (let i = 0; i < lista1.length; i++) {
        sumaLista = sumaLista + lista[i];
    }*/
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length //.length cuenta la cantidad de elementos del arreglo

    return promedioLista;
}

//Función Media Geometrica

function mediaGeometrica(list) {
    const multList = list.reduce(
        function(valueAcu = 0, newElement) {
            return valueAcu * newElement;
        }
    );

    const geometrica = (multList) ** (1 / list.length);

    return geometrica;
}

const pruebaGeo = [
    1,
    2,
    3,
    4,
    5,
    9,
];