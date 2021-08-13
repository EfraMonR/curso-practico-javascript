
//Funciones Helper

//Comprobamos si es número par o impar
function esPar(numerito) {
    return (numerito % 2 === 0);
}

//Calculamos el promedio
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length

    return promedioLista;
}
//----------------------------------------------

//Calculamos la mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad -1]
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Extraemos el salario de los objetos del array
const salariosCol = colombia.map(
    function(personita) {
        return personita.salary;
    }
);

//Ordenamos de manera ascendente los salarios
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryb) {
        return salaryA - salaryb;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Calculamos la mediana del Top 10%
const spliceStar = parseInt((salariosColSorted.length * 90) / 100); //Primer argumento
const spliceCount = salariosColSorted.length - spliceStar; //Segundo argumento

const salariosColTop10 = salariosColSorted.splice( //Siempre se debe hacer sobre la lista ordenada
    spliceStar,
    spliceCount
); 

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});

