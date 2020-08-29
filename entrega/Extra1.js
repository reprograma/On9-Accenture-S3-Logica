const input = require("readline-sync");
const readlineSync = require("readline-sync");

const numero = readlineSync.question("Insira um número:  ");
let linha = ""
let espaço = "e"

for (let index = 0; index<=numero-1; index++){
    
    linha=linha+"*"
    
    console.log(linha)
}