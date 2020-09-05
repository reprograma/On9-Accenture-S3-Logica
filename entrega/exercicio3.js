const readlineSync = require("readline-sync");

let fibonacciNumeroDigitado = Number(readlineSync.question("Digite um número: "));


function fibonacciUser(){

let fibonacciUsuario = fibonacciNumeroDigitado;
let f1 = 1;
let f2 = f1;
let f3 = f2 + f1;
let numeroFibEncontrar = f3 + f2;
let numeroPosicao = 4;

for(let numeroF4Novo = 0; numeroF4Novo <= fibonacciUsuario; numeroF4Novo = numeroFibEncontrar) {
    if(f2 != f3){
        f2 = f3;
        //console.log("f2 = " + f2);
    }else if(f2 = f3){
    f3 = numeroF4Novo;
    //console.log("f3 = " + f3);
    numeroFibEncontrar = f3 + f2;  
    //onsole.log("numerofibEncontrar = " + numeroFibEncontrar);  
    console.log("A posição fibonacci é: " + numeroPosicao++);
    }else{
        console.log("Este não é um número fibonacci.")
    }
}
}

fibonacciUser();
