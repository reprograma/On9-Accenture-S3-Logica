//Programa disco da xuxa: receba um 
//texto e imprima este texto invertido na tela

//como não pular linha???

const input = require("readline-sync");
const readlineSync = require("readline-sync");
let textoI = "" 

const texto = readlineSync.question("Disco da XUXA!!, Insira um texto e receba ele ao contário:  ");

for (let index = texto.length-1; index>=0; index--){
        textoI = textoI + (texto[index])
    
}

console.log("O texto ao contrário é: " +textoI)
