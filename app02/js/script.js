/*pasos para crear un programa en js*/
/*1.crear proyecto
2.crear archivo html
3.crear archivo js
4.vincular el archivo js al html
5.escribir el código en js
6.ejecutar el programa en el navegador*/
/*declaración de variables*/
/*var nombre = "Juan";
var apellido = "Perez";
var edad = 30;*/
/*var n1 = 5;
var n2 = 10;
var total ="";
total = n1 + n2;
alert("El resultado de la suma es: " + total);*/

/*var n1 = parseFloat(prompt("Ingrese el primer número:"));
var n2 = parseFloat(prompt("Ingrese el segundo número:"));
var total ="";
total = n1 + n2;
alert("El resultado de la suma es: " + total);*/

const suma = ()=>{
    const n1 = parseFloat(prompt("Ingrese el primer número:"));
    const n2 = parseFloat(prompt("Ingrese el segundo número:"));
}

const totales = () => {
    const total = n1 + n2;
}
const resultado = () => {
    alert("El resultado de la suma es: " + total);
}
suma();

totales();

resultado();