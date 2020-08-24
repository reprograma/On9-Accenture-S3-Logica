"user strict";

const readlineSync = require("readline-sync");

function calculaFibonacci(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return calculaFibonacci(n - 1) + calculaFibonacci(n - 2);
}

function mostraFibonacci() {
  let numero = readlineSync.question("Digite um número inteiro: ");
  let resultado = calculaFibonacci(numero);

  console.log(`O Fibonacci de ${numero} é igual a ${resultado}.`);
}

mostraFibonacci();

/* O programa funciona corretamente do número 3 em diante, com os números 
1 e 2 o código quebra. */
