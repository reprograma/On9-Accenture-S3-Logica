/* 2.Programa disco da xuxa: receba um texto e imprima este texto invertido na tela */

const readlineSync = require("readline-sync");

let palavra = readlineSync.question("Escreva em uma palavra como esta o seu dia: ");

for (let contador = palavra.length-1; contador >= 0; contador --){
    console.log(palavra[contador])
}