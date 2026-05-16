const saludo = (nombre) => {
    return `Hola, ${nombre}, Bienvenido a JavaScript.`;
}

let msg = saludo(prompt("digite su nombre:"));
console.log(msg);