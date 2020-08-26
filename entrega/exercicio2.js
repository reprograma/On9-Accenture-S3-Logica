const readlineSync = require("readline-sync");
const texto = readlineSync.question("Digite um texto: ");
let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
  textoInvertido = textoInvertido.concat(texto[i]);
}
console.log(textoInvertido);
