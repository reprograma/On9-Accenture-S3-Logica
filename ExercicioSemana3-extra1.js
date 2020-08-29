const readlineSync = require("readline-sync");

let numero = readlineSync.question("Digite um numero: ")

let asterisco = ''

for(let linha = 1; linha <= numero ; linha++){
    asterisco = asterisco + '*'
console.log(asterisco)
}
