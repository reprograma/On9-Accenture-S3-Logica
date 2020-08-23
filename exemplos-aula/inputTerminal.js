const readlineSync = require("readline-sync");

const nome = readlineSync.question("Qual o seu nome? ");
console.log("Oi " + nome + "!");

// Texto secreto (por exemplo, senha).
const comidaPreferida = readlineSync.question("Qual a sua comida preferia? ", {
  hideEchoBack: true, // O texto digitado na tela está oculto por `*`.
});
console.log(nome + " ama " + comidaPreferida + "!");
