// A seqüência de Fibonacci é a seguinte: 1, 1, 2
//, 3, 5, 8, 13, 21, 34, 55, ... Sua regra de formação
//é simples: os dois primeiros elementos são 1; a partir de
//então, cada elemento é a soma dos dois anteriores. Faça um
//algoritmo que leia um número inteiro calcule o seu número de
//Fibonacci. F1 = 1,
//F2 = 1, F3 = 2, etc.
const readlineSync = require('readline-sync');
let number = readlineSync.question('Informe a posicao desejada: ');
let penultimoNumber = 1;
let lastNumber = 1;
let result = 1;

for (let fibonacci = 3; fibonacci <= number; fibonacci++) {
  resultado = lastNumber + penultimoNumber;
  penultimoNumber = lastNumber;
  lastNumber = result;
}
console.log(result);
