// Formulas y código del calculo del cuadrado 
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm.");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es igual a: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es igual a: " + areaCuadrado + " cm^2");
console.groupEnd();

//Formulas y código del calculo del Triángulo
console.group("Triángulo");
const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triángulo miden: " + ladoTriangulo + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + " cm.");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es igual a: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es igual a: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es igual a: " + areaTriangulo + " cm^2");
console.groupEnd();

//Código del círculo
console.group("Círculo");

//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: "+radioCirculo+"cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: "+diametroCirculo+"cm");

//PI
const PI = Math.PI;
console.log("PI es: "+PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: "+perimetroCirculo+"cm");

// Área
const areaCirculo = (radioCirculo*radioCirculo) * PI;
console.log("El área del círculo es: "+areaCirculo+"cm^2");

console.groupEnd();

