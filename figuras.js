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

function perimetroTriangulo(lado1, lado2, base) {
    return parseFloat(lado1) + parseFloat(lado2) + parseFloat(base); //Se convierte el string a float
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

//Aqui interactuamos con el HTML

//Funciones de los botones para el cuadrado desde el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado"); //Dato traido desde el HTML
    const value = input.value; //Variable que almacena el dato traido
    const perimetro = perimetroCuadrado(value); //Función creada anteriormente para calcular
    alert("El perimetro del cuadrado es: " + perimetro + "cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado"); //Dato traido desde el HTML
    const value = input.value; //Variable que almacena el dato traido
    const area = areaCuadrado(value); //Función creada anteriormente para calcular
    alert("El area del cuadrado es: " + area + "cm²");
}

//Funciones de los botones para el triangulo desde el HTML
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputLado1Triangulo"); //El elemento es recodigo por el input en String se debe transformar a float por parseFloat en la función
    const inputLado2 = document.getElementById("InputLado2Triangulo");
    const inputBase = document.getElementById("InputBaseTriangulo");
    const lado1 = inputLado1.value;
    const lado2 = inputLado2.value;
    const base = inputBase.value;
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert("El perimetro del tríangulo es: " + perimetro + "cm")
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputBaseTriangulo");
    const inputAltura = document.getElementById("InputAlturaTriangulo")
    const base = inputBase.value;
    const altura = inputAltura.value;
    const area = areaTriangulo(base,altura);
    alert("El perimetro del tríangulo es: " + area + "cm²")
}

//Funciones de los botones para el círculo desde el HTLM
function calcularDiametroCirculo() {
    const radio = document.getElementById("InputRadioCirculo");
    const medida = radio.value;
    const diametro = diametroCirculo(medida);
    alert("El diametro del círculo es: " + diametro + "cm");
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("InputRadioCirculo");
    const medida = radio.value;
    const perimetro = perimetroCirculo(medida);
    alert("El perimetro del círculo es: " + perimetro + "cm");
}

function calcularAreaCirculo() {
    const radio = document.getElementById("InputRadioCirculo");
    const medida = radio.value;
    const area = areaCirculo(medida);
    alert("El area del círculo es: " + area + "cm");
}

//Función del tríangulo Isosceles
function trianguloIsosceles(lado1,lado2,base) {
    if (lado1 != lado2 || lado1 == base || lado2 == base) {
        return alert("No se cumplen las condiciones para un triangulo isosceles");
    } else {
        const altura = Math.sqrt((lado1 * lado1) - ((base * base) / 4));
        return alert("La altura del tríangulo es: " + altura + "cm");
    }
}

//Función del tríangulo Isosceles
/*function trianguloIsosceles(lado,base) {
    if (lado == base) {
        return alert("No se cumplen las condiciones para un triangulo isosceles todos los lados son iguales");
    } else {
        const altura = Math.sqrt((lado * lado) - ((base * base) / 4));
        return altura;
    }
}*/

function calcularAlturaIsosceles() {
    const inputLado1 = document.getElementById("InputIsosceles1");
    const inputLado2 = document.getElementById("InputIsosceles2");
    const inputBase = document.getElementById("InputIsoscelesBase");
    const lado1 = inputLado1.value;
    const lado2 = inputLado2.value;
    const base = inputBase.value;
    const altura = trianguloIsosceles(lado1,lado2,base);
    //alert("La altura del tríangulo es: " + altura + "cm")
}