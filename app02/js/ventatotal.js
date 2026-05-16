/* 4declarar variables*/
var producto="";
var precio = "";
var cantidad = "";
var porDescuento = "";
var totalcompra = "";
var valorDescuento = "";
var valorNeto = "";
/*5 funcion capturar datos*/
function capturarDatos(){
    producto = prompt("Ingrese el nombre del producto:");
    precio = parseFloat(prompt("Ingrese el precio del producto:"));
    cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
    porDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));
}
/*6 funcion calcular total*/   

function calcularPago(){
    totalcompra = precio * cantidad;
    valorDescuento = totalcompra * (porDescuento / 100);
    valorNeto = totalcompra - valorDescuento;
}
/*7 funcion mostrar resultado*/
function verResultado(){
    alert("producto :"+producto + "\n" + 
        "precio: " + precio + "\n" + "cantidad: " + cantidad + "\n" +
        "descuento: " + porDescuento + "%" + "\n" + 
        "total compra: " + totalcompra + "\n" +
        "(-)valor descuento: " + valorDescuento + "\n" +
        "valor neto a pagar: " + valorNeto);
}
/*8 invocar funciones*/
capturarDatos();
calcularPago();
verResultado();