//validar nota
var nota1;
var nota2;
var nota3;
var promedio;
var total;
var acumulado;
//pedir notas
function validarNota(nota) {
    nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
}
//calcular promedio y total acumulado
function calcularPromedio() {
    promedio = (nota1 + nota2 + nota3) / 3;
}
function acumularNotas() {
    total=nota1*25/100 + nota2*35/100 + nota3*40/100;
}
//mostrar resultado
function mostrarResultado() {
    alert("Promedio: " + promedio + "\nTotal: " + total);
}
//invocar funciones
validarNota();
calcularPromedio();
acumularNotas();
mostrarResultado();
