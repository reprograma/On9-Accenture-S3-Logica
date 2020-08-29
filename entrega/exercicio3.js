//A seqüência de Fibonacci é a seguinte: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ... Sua regra de formação é 
//simples: os dois primeiros elementos são 1; a partir de então, cada elemento é a soma dos dois anteriores.
//Faça um algoritmo que leia um número inteiro calcule o seu número de Fibonacci. F1 = 1, F2 = 1, F3 = 2, etc.

const readlineSync = require("readline-sync")
let num = readlineSync.question ("Digite um numero: ")

function fibonacci(){
  let f1 = 1, f2=0, f3=0 
    for (let index = 0; index < num; index ++) { //vai fazer a soma 
        f3 = f1 + f2
        f1=f2
        f2=f3
        console.log(f3)
        
    }
}
fibonacci()