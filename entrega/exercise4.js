/* 4 - Crie uma função com as seguintes características:
A função deve receber 3 parâmetros
Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha todos os valores corretamente!"
O retorno da função deve ser a multiplicação dos 3 parâmetros, somando 2 ao resultado da multiplicação. */

function operacao(num1, num2, num3) {
    if (num1 === undefined || num2 === undefined || num3 === undefined) {
      console.log("Preencha todos os valores corretamente!")
    } else {
      let calculo = num1 * num2 * num3 + 2;
      console.log(calculo);
  }
}

operacao(2,3,5)