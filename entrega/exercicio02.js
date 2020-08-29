const readlineSync = require("readline-sync");

function textoInvertido (text) {
    let index = 0;
    let index2 = 0;
    let quantidade = text.length;
    let stringReverse = [];
    for(index = quantidade  - 1, index2 = 0; index >= 0; index--, index2++) {
            stringReverse[index2] = text[index];
        }
       let inverter = stringReverse;
        return inverter;

}

let string = readlineSync.question("Esse texto será apresentado invertido");
console.log(textoInvertido(string));