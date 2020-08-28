//Programa disco da xuxa: receba um texto e imprima este texto invertido na tela
const readlineSync = require("readline-sync");

function discoDaXuxa (frase) {
    let frase = readlineSync.question("Digite um texto: ");
    return frase.split('').reverse().join('');
}

console.log(discoDaXuxa(frase))

  