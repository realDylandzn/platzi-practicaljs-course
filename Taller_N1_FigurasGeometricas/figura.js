// Formulas y código del calculo del cuadrado 
console.group("Cuadrado");


function perimetroCuadrado(lado){
    return lado * 4;
};

function areaCuadrado(lado){
    return lado * lado;
};
console.groupEnd();

//Formulas y código del calculo del Triángulo

function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2) + base;
};

function areaTriangulo(lado1, base){
    return (Math.sqrt((lado1*lado1) - ((base*base)/4)));
};
console.groupEnd();

//Código del círculo
console.group("Círculo");


//Diámetro
function diametroCirculo(radio){
    return radio * 2;
};
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

// Área
function areaCirculo(radio){
    return (radio*radio) * PI;
};

console.groupEnd();

//Conexión con HTML

function calcularPCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularACuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
};

function calcularPTriangulo() {
    const inputA = document.getElementById("InputTrianguloLadoA");
    const valueA = Number(inputA.value);
    const inputB = document.getElementById("InputTrianguloLadoB");
    const valueB = Number(inputB.value);
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueA,valueB,valueBase);
    alert(perimetro);
};
function calcularATriangulo() {
    const inputA = document.getElementById("InputTrianguloLadoA");
    const valueA = Number(inputA.value);

    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const area = areaTriangulo(valueA, valueBase);
    alert(area);
};

function calcularPCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
};

function calcularACirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
};