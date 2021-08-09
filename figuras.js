//Código del cuadrado en funciones
console.group("Cuadrados");

function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//Código del triángulo en funciones
console.group("Triángulos");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

//Código del círculo en funciones
console.group("Circulo");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("Pi equivale a: " + PI);

// Perimetro
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio); //Se crea una variable nueva donde se trae la función declarada anteriormentee
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
} 

console.groupEnd();
