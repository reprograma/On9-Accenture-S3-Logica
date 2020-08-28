/* 1. A seqüência de Fibonacci é a seguinte: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ... 
Sua regra de formação é simples: os dois primeiros elementos são 1; 
a partir de então, cada elemento é a soma dos dois anteriores. 
Faça um algoritmo que leia um número inteiro calcule o seu número de Fibonacci. F1 = 1, F2 = 1, F3 = 2, etc. */


const readlineSync = require("readline-sync");

let num = Number(readlineSync.question("Digite um número: "));

function fibonacci(){
    var termo = parseInt(document.getElementById(num).value);
    var penultimo=0, ultimo=1;
    var numero;
  
    if(termo<=2)
     numero = termo-1;
    else
     for(var count=3 ; count<=termo ; count++){
      numero = ultimo + penultimo;
      penultimo = ultimo;
      ultimo = numero;
     }
  
    console.log(numero);
  }