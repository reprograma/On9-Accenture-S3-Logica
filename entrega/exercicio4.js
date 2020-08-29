const readlineSync = require("readline-sync");

let digiteNumero1 = Number(readlineSync.question("Digite o primeiro número: "));
let digiteNumero2 = Number(readlineSync.question("Digite o segundo número: "));
let digiteNumero3 = Number(readlineSync.question("Digite o terceiro número: "));


function parametrosCom3(numeroPrimeiro, numeroSegundo, numeroTerceiro){
    if(digiteNumero1 > Number.isNaN() && digiteNumero2 > Number.isNaN() && digiteNumero3 > Number.isNaN()){
        numeroPrimeiro = digiteNumero1;
        numeroSegundo = digiteNumero2;
        numeroTerceiro = digiteNumero3;
        console.log((numeroPrimeiro * numeroSegundo * numeroTerceiro)+2);
    }else{
    console.log("Preencha todos os valores corretamente!");
}
}
parametrosCom3();