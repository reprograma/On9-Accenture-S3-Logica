const readlineSync = require("readline-sync");
let numero;
do {
  numero = readlineSync.question("Digite qualquer número ou -1 para sair: ");
  console.log("Você digitou o número " + numero);
} while (numero != -1);
console.log("Tchau!");
