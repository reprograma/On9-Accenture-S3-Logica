/* crie uma função que receba um número qualquer devolva o seguinte 
padrão como resultado (inclusive com os espaços). 
Por exemplo, caso receba o número 6 como parâmetro: 
*
**
***
****
*****
******
*/

const readlineSync = require("readline-sync");

const inputNumber = readlineSync.question("Digite um número: ");

let star = "";

function moreStars(number) {
  for (let index = 1; index <= number; index++) {
    star += "*";
    console.log(star);
  }
}

moreStars(inputNumber);

