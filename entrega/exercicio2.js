/* xuxa 

const readlineSync = require("readline-sync");

let palavra = readlineSync.question("Insira uma palavra qualquer ");

let invertida = palavra.split('').reverse().join('');
  console.log("Você digitou: " + palavra + " e invertida fica " + invertida);
*/

//usando laços de repetiçao para exercicio

const readlineSync = require("readline-sync");
let palavra = readlineSync.question("Digite uma palavra qualquer");
let tamanhoDaPalavra = palavra.length;
let contador = (tamanhoDaPalavra-1);

while (contador < tamanhoDaPalavra) {
    if (contador < 0){
      break;
    } 
    
    console.log(palavra[contador]);
    contador--;    
}
