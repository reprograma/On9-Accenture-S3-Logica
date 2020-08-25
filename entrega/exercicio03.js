/* 3 - A seqüência de Fibonacci é a seguinte: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
Sua regra de formação é simples: os dois primeiros elementos são 1; a partir de então, 
cada elemento é a soma dos dois anteriores. 
Faça um algoritmo que leia um número inteiro calcule o seu número de Fibonacci. 
F1 = 1, F2 = 1, F3 = 2, etc. */

const readlineSync = require('readline-sync');
let numero = readlineSync.question("Digite um numero inteiro: ");

let nAnterior = 1;
let nAtual = 1;
let nNovo;
console.log("F1 = " + nAnterior + "\nF2 = " + nAtual);

for(let i = 1; i <= numero-2; i++){
    nNovo = nAnterior + nAtual;
    nAnterior = nAtual;
    nAtual = nNovo;
    console.log("F" + [i+2] + " = " + nNovo)
    nNovo = 0;
}

//node entrega/exercicio03.js