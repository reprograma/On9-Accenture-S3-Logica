const readlineSync = require("readline-sync");
const numero = Number(readlineSync.question("Digite um número inteiro :"));

const valorFibonacci = fibonacci(numero);

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(
  "O valor de Fibonacci para F" + numero + " é de : " + valorFibonacci
);
