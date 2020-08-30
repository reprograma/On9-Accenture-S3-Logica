/* 1. A seqüência de Fibonacci é a seguinte: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ... 
Sua regra de formação é simples: os dois primeiros elementos são 1; 
a partir de então, cada elemento é a soma dos dois anteriores. 
Faça um algoritmo que leia um número inteiro calcule o seu número de Fibonacci. F1 = 1, F2 = 1, F3 = 2, etc. */


const readlineSync = require("readline-sync");

let numeroDoUsuario = Number(readlineSync.question("Digite um número: ")); 

function fibonacci( numeroDoUsuario ) {
    console.log("Qual o valor inserido pelo usuário? " + numeroDoUsuario)
    let primeiroNumero = 0
    let segundoNumero = 1
    for (let index = 2; index <= numeroDoUsuario; index++) {
        let ultimoNumero = primeiroNumero; // nessa linha, o ultimoNumero acabou de ser criado, então ele recebe o valor do primeiroNumero, passando a ser 0 no primeiro loop
        console.log("Acabamos de criar a variavel ultimoNumero, na iteração " + index + " no momento ela vale: " + ultimoNumero)
        primeiroNumero = segundoNumero;  // nessa linha, o primeiroNumero tem seu valor trocado para o mesmo do segundoNumero, então ele passa a ser 1 no primeiro loop
        console.log("Nesse momento a variável segundoNumero vale: " + segundoNumero)
        segundoNumero += ultimoNumero; // aqui, é feita a soma para gerar o resultado do número de fibonacci, somando os dois últimos valores passados
    }
    return "O numero " + numeroDoUsuario + " da sequência de fibonacci é: " + segundoNumero;
  }
  console.log(fibonacci(4))