const readlineSync = require("readline-sync");
let numeroInteiro =( readlineSync.question("Digite um numéro inteiro e descubra o seu número de Fibonacci correspondente "));
let elementoFibonacci = 1;
let elementoFibonacciAtual = 1;
let soma = elementoFibonacci + elementoFibonacciAtual
let numeroFibonacci;

    if (numeroInteiro > 0 && numeroInteiro <= 2){
    console.log ("O elemento Fibonacci correspondente é: "  + elementoFibonacci);
    }
    else {
       for(let contador = 3; contador <= numeroInteiro; contador++){

        numeroFibonacci = soma;
        soma = numeroFibonacci+ elementoFibonacciAtual
        elementoFibonacciAtual = numeroFibonacci

    }
    console.log (("O elemento Fibonacci correspondente é: "  + numeroFibonacci))
    }