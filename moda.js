const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Count = {}; //Creamos objeto

//Hacemos un recorrido por todo el arreglo, verifica que elementos hay y cuantas veces se repiten.

lista1.map( //Hace un recorrido por todo el arreglo, verifica que elementos hay y cuantas veces se repiten.
    function(elemento) {
        if (lista1Count[elemento]) { //Esta verifica cuando el elemento ya está creado
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1; //Esta verifica cuando el emento no está crado
        }
    }
);

//Creamos un arreglo para almacenar el objeto

const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB) {
        return elementoA[1] - elementoB[1]; //Ordena por la segunda posición
    }
);

const moda = lista1Array[lista1Array.length - 1]; //.length genera el tamaño del array, con eso se le resta -1 para poder saber cual es la ultima posición. (Empieza siempre desde 0)




 