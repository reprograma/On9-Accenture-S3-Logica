"use strict";

const readlineSync = require("readline-sync");

function inverteTexto() {
  let texto = readlineSync.question("Digite um texto, por favor: ");
  let invertido = texto.split("").reverse().join("");
  console.log(`O texto ${texto} invertido é ${invertido}.`);
}

inverteTexto();

/* O método split("") transforma o texto num array de caracteres únicos 
e por ter sido tranformado em array pode-se aplicar métodos de array, que 
nesse caso são o reverse() para inverter o array e join("") para transformar
o array em string novamente.*/
