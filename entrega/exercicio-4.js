/* Crie uma função com as seguintes características:
A função deve receber 3 parâmetros
Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: 
"Preencha todos os valores corretamente!"
O retorno da função deve ser a multiplicação dos 3 parâmetros, somando 2 ao resultado da multiplicação */

const readlineSync = require("readline-sync");

function showResult(numberOne, numberTwo, numberThree) {
  if (numberOne === "" || numberTwo === "" || numberThree === "") {
    console.log("Preencha todos os valores corretamente!");
    return null;
  }
  return numberOne * numberTwo * numberThree + 2;
}

let result;

do {
  let inputOne = readlineSync.question("Digite o 1º número: ");
  let inputTwo = readlineSync.question("Digite o 2º número: ");
  let inputThree = readlineSync.question("Digite o 3º número: ");

  result = showResult(inputOne, inputTwo, inputThree);
} while (result === null);

console.log(result);

