/* A seqüência de Fibonacci é a seguinte: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ... 
Sua regra de formação é simples: os dois primeiros elementos são 1; a partir de então, 
cada elemento é a soma dos dois anteriores. Faça um algoritmo que leia um número inteiro 
calcule o seu número de Fibonacci. F1 = 1, F2 = 1, F3 = 2, etc. */

const readlineSync = require("readline-sync");

const inputNumber = readlineSync.question("Digite um número: ");

function fibonacci(number) {
  let f1 = 1; 
  let f2 = 1; 

  let fibonacci;

  if (number <= 2) fibonacci = 1;
  else
    for (let index = 3; index <= number; index++) {
      fibonacci = f2 + f1;
      f1 = f2;
      f2 = fibonacci;
    }

  console.log("Número de Fibonacci: " + fibonacci);
}

fibonacci(inputNumber)
