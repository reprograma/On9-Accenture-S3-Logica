/*A seqüência de Fibonacci é a seguinte: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
Sua regra de formação é simples: os dois primeiros elementos são 1; a partir de então,
elemento é a soma dos dois anteriores. Faça um algoritmo que leia um número inteiro
calcule o seu número de Fibonacci. F1 = 1, F2 = 1, F3 = 2, etc.*/
const readlineSync = require("readline-sync");
let posicao = Number(readlineSync.question('Insira aqui a posição que deseja saber na sequência: '))
let parcelaA = 1;
let parcelaB = 1;
let soma = parcelaA + parcelaB;
let parcelaC;

if (posicao === 1) {
    console.log(`O número ${parcelaA} ocupa a ${posicao}ª posição `)
} else if (posicao == 2) {
    console.log(`O número ${parcelaB} ocupa a ${posicao}ª posição `)
} else {
    for (let contador = 3; contador <= posicao; contador++) {

        parcelaC = soma;
        soma = parcelaC + parcelaB;
        parcelaB = parcelaC;
        // console.log(parcelaC)
    }
    console.log(`O número ${parcelaC} ocupa a ${posicao}ª posição `)

}

