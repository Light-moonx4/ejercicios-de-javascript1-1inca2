//Ejercicio 2: Triángulo
//definir variables para altura, base, lados, área y perímetro
var altura;
var base;
var lado1;
var lado2;
var lado3;
var area;
var perimetro;
//pedir altura y base de un triángulo
//pedir lados del triángulo
function triangulo(){
     altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
     base = parseFloat(prompt("Ingrese la base del triángulo:"));
     lado1 = parseFloat(prompt("Ingrese el primer lado del triángulo:"));
     lado2 = parseFloat(prompt("Ingrese el segundo lado del triángulo:"));
     lado3 = parseFloat(prompt("Ingrese el tercer lado del triángulo:"));
}
//calcular área y perímetro del triángulo
function calcularArea(){
    area = (base * altura) / 2;
}
function calcularPerimetro(){
    perimetro = lado1 + lado2 + lado3;
}
//mostrar resultado
function mostrarResultado(){
    alert("Área del triángulo: " +area + "\nPerímetro del triángulo: " + perimetro);
}
//invocar funcionesjs/ejercicio2.js
triangulo();
calcularArea();
calcularPerimetro();
mostrarResultado();