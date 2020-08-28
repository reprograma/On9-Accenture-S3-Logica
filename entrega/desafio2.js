const readlineSync = require("readline-sync");

const nome = readlineSync.question("Digite a palavra: ");

for (let counter = nome.length; counter >= 0  ; counter--) {
    console.log(nome[counter]);
}
