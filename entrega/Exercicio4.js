//1. Crie uma função com as seguintes características:
//- A função deve receber 3 parâmetros
//- Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a
// string: "Preencha todos os valores corretamente!"
//  - O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado
//da multiplicação.

const readlineSync = require('readline-sync');
const numero1 = readlineSync.question('Digite um numero ');
const numero2 = readlineSync.question('Digite um numero ');
const numero3 = readlineSync.question('Digite um numero ');

function soma(numero1, numero2, numero3) {
  if (numero1 === '' || numero2 === '' || numero3 === '') {
    console.log('Preencha todos os valores corretamente!');
  }
  return numero1 * numero2 * numero3 + 2;
}
console.log(soma(1, 2, 3));
