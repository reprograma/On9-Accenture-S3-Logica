const readlineSync = require("readline-sync");

function imprimirEstrelinhas(){

let imprimirPadrao = Number(readlineSync.question("Digite qualquer número: "));
let estrelinha = "*";


for(numeroPadrao = 0; numeroPadrao <= imprimirPadrao; numeroPadrao++ ){
    let linhaEstrelinha;
    console.log(estrelinha.repeat(numeroPadrao));
    
}
}
imprimirEstrelinhas();