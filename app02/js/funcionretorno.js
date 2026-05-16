const capturarDatos=()=>{
    let n1 = parseFloat(prompt("Ingrese el primer número:"));
    let n2 = parseFloat(prompt("Ingrese el segundo número:"));
    let finis=calcularDefinitiva(n1,n2);
    alert("El resultado de la definitiva es: " + finis);
}
const calcularDefinitiva = (vn1=0,vn2=0,nv3=0) => {
    let definitiva = (vn1 + vn2 + nv3) / 3;
    return definitiva;
}

capturarDatos();