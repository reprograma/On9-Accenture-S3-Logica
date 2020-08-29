/* 1. O Sr. Manoel Joaquim possui uma grande loja de artigos de R\$ 1,99, com cerca de 10 caixas. 
Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela 
que contém o número de itens que o cliente comprou e ao lado o valor da conta. 
Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. 
Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, 
conforme o exemplo abaixo:
```
Lojas Quase Dois - Tabela de preços
1 - R$ 1.99
2 - R$ 3.98
...
50 - R$ 99.50
``` */

const readlineSync = require("readline-sync");
let qtd = Number(readlineSync.question("Quantos produtos foram comprados?"));
/* 
for (let index = 0; index <= qtd.length; index++) {
    if (qtd <= 0) {
      console.log("Não há produtos comprados");
      continue;
    }
    console.log("Cliente pagará " + qtd[index]);
  } */
  
  for (let index = 1; index <= qtd; index++) {
    if( qtd <= 0 ){
        console.log("Não foram comprados produtos. Insira um valor a partir de 1 produto")
    } 
      for ( let counter = index; counter <= index; counter++){
        console.log("Produto número " + index+ " Cliente pagará: R$" + (counter * 1.99).toFixed(2)+ " reais");
    }
  }