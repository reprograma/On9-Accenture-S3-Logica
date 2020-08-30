// 1. O Sr. Manoel Joaquim possui uma grande loja de artigos de R\$ 1,99, com cerca de 10 caixas.
// Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o
// número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do
// caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços.
// Você foi contratado para desenvolver o programa que monta esta tabela de preços,
// que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:

console.log("Lojas Quase Dois - Tabela de preços");
console.log("===================================");
for (let quantidade = 1; quantidade <= 50; quantidade++) {
  console.log(quantidade + " - R$" + (quantidade * 1.99).toFixed(2));
}
