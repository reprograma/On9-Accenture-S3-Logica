// Programa disco da xuxa: receba um texto e imprima este texto invertido na tela

const readlineSync = require("readline-sync");

const inputText = readlineSync.question("Digite uma palavra: ");

function discoDaXuxa(text) {
  let inverted = "";

  for (let index = text.length - 1; index >= 0; index--) {
    inverted += text[index];
  }
  console.log(inverted);
}

discoDaXuxa(inputText);
