/*O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. 
Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o 
número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa
 precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. 
Você foi contratado para desenvolver o programa que monta esta tabela de preços,
que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:*/

const readlineSync = require("readline-sync");
let preco = 1.99;
let itens = readlineSync.question('Quantos itens você deseja levar? :');
console.log('Confira na tabela abaixo o valor correspondente ao total da sua compra ');

for(let contador = 1; contador <=50; contador++){
    console.log(`${contador} item(ns) - total de R$ ${contador*preco}`)
}

console.log('Volte Sempre')