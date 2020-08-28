/* 3 - A seqüência de Fibonacci é a seguinte: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ... Sua regra de formação é simples: os dois primeiros elementos são 1; a partir de então, cada elemento é a soma dos dois anteriores. Faça um algoritmo que leia um número inteiro calcule o seu número de Fibonacci. F1 = 1, F2 = 1, F3 = 2, etc. */

const readlineSync = require("readline-sync");
let fibonacci = Number(readlineSync.question("Digite um numero para saber seu Fibonacci: "));
let anterior = 0;
let atual = 1;
let proximo = 1;

for(index = 2; index <= fibonacci; index++) {
  proximo = atual + anterior;
  anterior = atual;
  atual = proximo;
}
console.log("O Fibonacci de " + fibonacci + " é igual a " + proximo);