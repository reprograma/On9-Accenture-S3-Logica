const readlineSync = require("readline-sync");

function reverse (text) {
    let index = 0;
    let index2 = 0;
    let tamanho = text.length;
    let stringReverse = [];
    for(index = tamanho  - 1, index2 = 0; index >= 0; index--, index2++) {
            stringReverse[index2] = text[index];
        }
       let inverso = stringReverse;
        return inverso;

}

let string = readlineSync.question("Digite um texto para que ele seja invertido: ");
console.log(reverse(string));



