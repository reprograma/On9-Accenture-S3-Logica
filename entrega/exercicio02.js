//2 - Programa disco da xuxa: receba um texto e imprima este texto invertido na tela

const readlineSync = require('readline-sync');

let texto = readlineSync.question("Digite um texto: ");

let textoEmLinha = "";

for( let index = texto.length-1 ; index >= 0; index--){
        textoEmLinha += texto[index];


} 
console.log(textoEmLinha);



// node entrega/exercicio02.js