//2 - Programa disco da xuxa: receba um texto e imprima este texto invertido na tela

const readlineSync = require('readline-sync');

let texto = readlineSync.question("Digite um texto: ");

for( let i = texto.length-1 ; i >= 0; i--){
        console.log(texto[i]);

} 



// node entrega/exercicio02.js