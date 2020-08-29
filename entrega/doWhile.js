
//const readlineSync = require("readline-sync")

//let numero = Number(readlineSync.question("Digite um numero :"));
/*let resultado = readlineSync.question("Digite um numero :"); // aqui o valor é string
let contador = 0;
do {
contador = (contador + 1)
resultado = (resultado + contador)
} while (contador < 50);

console.log(resultado); 
*/
//========================================================================
/*let result = "";
let counter = 0;

do {
  counter = counter + 1;
  result = result + counter;
} while (counter < 50);

console.log(result);
// expected result: "12345"*/

//==============================================================================

const readlineSync = require("readline-sync")

let numero;

do {
  numero = readlineSync.question("Digite um numero: ")
  console.log("Voce digitou o numero :" + numero)
} while ( numero != 2)

console.log("Adeus!")