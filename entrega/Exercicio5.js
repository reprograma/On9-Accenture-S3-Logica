const input = require("readline-sync");
const readlineSync = require("readline-sync");

//const texto = readlineSync.question("Disco da XUXA!!, Insira um texto e receba ele ao contário:  ");

const quantItens = 50
const preçoUnidade = 1.99

console.log ("  ")
console.log("```")
console.log("Lojas Quase Dois - Tabela de preços")
console.log ("  ")

for (let index = 1; index<=quantItens; index++){
    console.log(index + " - R$ " + (index*preçoUnidade))
    console.log ("  ")
}

console.log("```")