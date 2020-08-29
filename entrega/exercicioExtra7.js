const readlineSync = require("readline-sync");

function imprimriAsEspacoEstrelinhas(){
let imprimirPadrao = Number(readlineSync.question("Digite qualquer número: "));
let estrelinha = "*";
let espacoAntesEstrelinha = " ";


for(numeroPadrao = 0; numeroPadrao <= imprimirPadrao; numeroPadrao++ ){
    let imprimirEspaco = imprimirPadrao - numeroPadrao;
    console.log((espacoAntesEstrelinha.repeat(imprimirEspaco))+(estrelinha.repeat(numeroPadrao)));
    
}
}
imprimriAsEspacoEstrelinhas();
