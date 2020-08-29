
//exercicio 2

const readlineSync = require("readline-sync");

let texto = readlineSync.question("digite um texto: ");

for(let contador = texto.length-1; contador >=0; contador--) {
    
    console.log(texto[contador]);

}