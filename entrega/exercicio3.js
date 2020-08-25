const readlineSync = require("readline-sync");

let termo = readlineSync.question("Digite um número inteiro: ");
let penultimo = 1;
let ultimo = 0;
let numero = 1;

while (penultimo < termo) {
    valor = numero;
    numero = ultimo + numero;
    ultimo = valor;
    penultimo++
}

console.log("F" + termo + " =", numero);