const readlineSync = require("readline-sync");

let invertedText = readlineSync.question("Digite seu texto aqui: ")

function inverter(invertedText) {
    return invertedText.split('').reverse().join('');
}

console.log("Seu texto invertido é: " + inverter(invertedText));
