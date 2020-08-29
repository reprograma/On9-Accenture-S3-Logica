"use strict";

const readlineSync = require("readline-sync");

function inverteTexto() {
  let texto = readlineSync.question("Digite um texto, por favor: ");
  let invertido = texto.split("").reverse().join("");
  console.log(`O texto ${texto} invertido é ${invertido}.`);
}

inverteTexto();

