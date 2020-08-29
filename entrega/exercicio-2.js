/* Programa disco da xuxa: receba um texto e imprima este texto invertido na tela */

const readlineSync = require("readline-sync");

let palavra = readlineSync.question( " Digite uma palavra: " )

for(let contador = palavra.length-1; contador >=0; contador--){

    console.log(palavra[contador]);

}
