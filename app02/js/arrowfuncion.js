function capturarDatos(){
    let n1 = parseFloat(prompt("Ingrese el primer número:"));
    let n2 = parseFloat(prompt("Ingrese el segundo número:"));
    calcularDefinitiva(n1,n2);
}
function calcularDefinitiva(vn1=0,vn2=0,nv3=0){
    let definitiva = (vn1 + vn2 + nv3) / 3;
    alert("El resultado de la definitiva es: " + definitiva);
}

capturarDatos();
