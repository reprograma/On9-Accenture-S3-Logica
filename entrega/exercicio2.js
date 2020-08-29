
const readlineSync = require("readline-sync")

let texto = readlineSync.question("Digite um texto e veja a bruxaria: ") ; 

function inverter(texto) {
  return texto.split('').reverse().join('');
}
console.log(inverter(texto));
