

/*let contador = 0;

while(contador <= 10){
    console.log(contador);
    contador++;
} */

//====================================================

const readlineSync = require("readline-sync")

let contador = 0;

while( contador <= 10) {
    nome = readlineSync.question("Digite um numero ");
    console.log("O numero digitado foi " + contador);
    contador++;
}
