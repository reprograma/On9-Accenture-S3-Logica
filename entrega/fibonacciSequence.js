const readlineSync = require('readline-sync');

let fibonacciNumber = parseInt(readlineSync.question("Digite um número: "));

function fibonacci(fibonacciNumber){
    if (fibonacciNumber <= 1) {
    return 1;
    } else {
        fibonacciNumber = fibonacci(fibonacciNumber - 1) + fibonacci(fibonacciNumber -2)
        return fibonacciNumber;
    }
}

console.log("Seu número Fibonacci é: " + fibonacci(fibonacciNumber));
