const suma = ()=>{
    const n1 = parseFloat(prompt("Ingrese el primer número:"));
    const n2 = parseFloat(prompt("Ingrese el segundo número:"));
    totales(n1,n2);
}

const totales = (vn1,vn2) => {
    const total = vn1 + vn2;
    resultado(total);
}
const resultado = (vtotal) => {
    alert("El resultado de la suma es: " + vtotal);
}
suma();

