/**Exercício 3 - 1. A seqüência de Fibonacci é a seguinte: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ... 
 * Sua regra de formação é simples: os dois primeiros elementos são 1; 
 * a partir de então, cada elemento é a soma dos dois anteriores. 
 * Faça um algoritmo que leia um número inteiro calcule o seu número de Fibonacci. F1 = 1, F2 = 1, F3 = 2, etc.

 * 
 */
const readlineSync = require('readline-sync');
let number = readlineSync.question("Digite um número inteiro: ");
//let f1 = number + number;

const valorFibonacci = fibonacci(number);

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log("O valor de Fibonacci de " + number + " é: " + valorFibonacci);