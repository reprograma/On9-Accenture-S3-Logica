// Crie uma função com as seguintes características:
//    - A função deve receber 3 parâmetros
//    - Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha todos os valores corretamente!"
//    - O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.

function myFunction(first, second, third) {
  if (first === undefined || second === undefined || third === undefined) {
    return "Preencha todos os valores corretamente!";
  }

  result = first * second * third + 2;

  return result;
}

console.log(myFunction(1, 2, 3));
