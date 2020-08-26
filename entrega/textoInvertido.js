const readlineSync = require("readline-sync");

let textoInvertido = readlineSync.question("Digite seu texto aqui:")

function inverter(textoInvertido) {
    return textoInvertido.split('').reverse().join('');
}

console.log(inverter(textoInvertido));
