/* O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. 
Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém 
o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do 
caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. 
Você foi contratado para desenvolver o programa que monta esta tabela de preços, 
que conterá os preços de 1 até 50 produtos */

function showTable() {
  console.log("Lojas Quase Dois - Tabela de preços");
  for (let index = 1; index <= 50; index++) {
    price = (index * 1.99).toFixed(2);

    console.log(index + " - R$ " + price);
  }
}

showTable();
