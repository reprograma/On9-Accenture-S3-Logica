//1. Programa disco da xuxa: receba um texto e
//imprima este texto invertido na tela

const readlineSync = require('readline-sync');
let name = readlineSync.question('Digite um texto ');

let invertedTextResult = '';

for (let index = name.length - 1; index >= 0; index--) {
  invertedTextResult = invertedTextResult + name[index];
}
console.log(invertedTextResult);
