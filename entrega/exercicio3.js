const readlineSync = require("readline-sync");
let posiçãoFibonacci = Number( readlineSync.question("Digite qual elemento do Fibonacci voce deseja saber: "));
let numeroAnterior = 1;
let numeroAtual = 1;
let soma = numeroAnterior + numeroAtual
let numeroFibonacci;

    if (posiçãoFibonacci > 0 && posiçãoFibonacci <= 2){
    console.log ("O elemento Fibonacci é "  + numeroAnterior);
    }
    else {
       for(let contador = 3; contador <= posiçãoFibonacci; contador++){

        numeroFibonacci = soma;
        soma = numeroFibonacci+ numeroAtual
        numeroAtual = numeroFibonacci
        
        
    }
    console.log (("O elemento Fibonacci é:"  + numeroFibonacci))
    }
