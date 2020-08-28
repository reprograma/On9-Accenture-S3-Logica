// 2 - Programa disco da xuxa: receba um texto e imprima este texto invertido na tela

const readlineSync = require("readline-sync");
let texto = readlineSync.question("Digite um texto: ");
let textoInvertido = "";

for (let index = texto.length - 1; index >= 0; index--) {
    textoInvertido += texto[index];
}
console.log(textoInvertido);