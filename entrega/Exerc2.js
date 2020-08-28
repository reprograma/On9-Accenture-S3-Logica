// 2.Programa disco da xuxa: receba um texto e imprima este texto
//invertido na tela.

const readlineSync = require("readline-sync");
let string = readlineSync.question("Digite um texto para que seja invertido: ");

let counter = 0

for(let counter = string.length -1; counter >= 0; counter--){

    console.log(string[counter]);

}