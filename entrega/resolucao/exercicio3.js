const readlyneSync = require("readline-sync");

const posicao = Number(readlyneSync.question("Digite o valor de N: "));
// penultimo
let anterior;
// anterior ao numero
let atual;
// numero que vai ser exibido
let proximo;

// situação inicial da sequencia:
anterior = 0;
atual = 1;
proximo = 1;

for (let index = 1; index <= posicao; index++) {
  console.log(proximo);
  proximo = atual + anterior;
  anterior = atual;
  atual = proximo;
}
console.log(anterior);

// outra maneira:

// let termo = Number(readlyneSync.question("Digite o valor de N: "));
// let penultimo = 0,
//   ultimo = 1;
// let numero;

// if (termo <= 2) {
//   numero = termo - 1;
// } else {
//   for (let contador = 3; contador <= termo; contador++) {
//     numero = ultimo + penultimo;
//     penultimo = ultimo;
//     ultimo = numero;
//   }
// }
// console.log(numero);

// solução avançada porem legivel
// function fibonacci(num) {
//   if (num <= 1) return 1;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }
