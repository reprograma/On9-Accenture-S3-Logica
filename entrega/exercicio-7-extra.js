/* Refaça o exercício acima, porém agora com o seguinte padrão:
     *
    **
   ***
  ****
 *****
 */

const readlineSync = require("readline-sync");

const inputNumber = readlineSync.question("Digite um número: ");

let star = "";
let space = " ";

function moreStars(number) {
  for (let index = 1; index <= number; index++) {
    star += "*";
    console.log(space.repeat(number - star.length) + star);
  }
}

moreStars(inputNumber);
