const readlineSync = require("readline-sync");

const nome = readlineSync.question("Digite uma palavra: ")

let nomeIvertido = ""
for (let index = nome.length-1; index >= 0 ; index = index -1 ){
    nomeIvertido = nomeIvertido + nome[index]
}
console.log(nomeIvertido)