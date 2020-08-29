//3-A seqüência de Fibonacci é a seguinte: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,... 
//Sua regra de formação é simples: os dois primeiros elementos são 1; a partir de então, 
//cada elemento é a soma dos dois anteriores. 
//Faça um algoritmo que leia um número inteiro calcule o seu número de Fibonacci. 
//F1 = 1, F2 = 1, F3 = 2, etc.

const readlineSync = require("readline-sync");

numero = readlineSync.question("Entre com um numero ")
let fibonacci = [1,1]
let soma = 0 

do {

    const quandidadeNumeros = fibonacci.length - 1
    const ultimoNumero = fibonacci[quandidadeNumeros]
    const penultimoNumero = fibonacci[quandidadeNumeros - 1]

    soma = ultimoNumero + penultimoNumero
    fibonacci.push(soma)
} while (soma <= numero)

console.log("Sequencia de Fibonacci " + soma) 
