const input = require("readline-sync");

const readlineSync = require("readline-sync");

let popA = 80000
let popB = 200000   
//let taxaCresA = 0.03
//let taxaCresB = 0.015
let ano = 0

while ( popA<popB ) {
    ano ++;
    popA = popA*1.03
    popB = popB*1.015
}

console.log ("A população da cidade A irá ultrapassar a população da cidade B em " + ano +" anos")