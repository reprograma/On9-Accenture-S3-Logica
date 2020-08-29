const readlineSync = require("readline-sync");

let texto = readlineSync.question("Escreva alguma coisa: ");

function inverte(texto) {
  return texto.split('').reverse().join('');
}

console.log(inverte(texto));