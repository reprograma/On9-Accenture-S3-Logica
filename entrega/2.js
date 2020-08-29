// Programa Disco da Xuxa: Programa disco da xuxa: receba um texto e imprima este texto invertido na tela

const readlineSync = require("readline-sync");
let palavraEscolhida = readlineSync.question("Insira a palavra desejada: ");
let comprimentoDaPalavra = palavraEscolhida.length;
let contador = (comprimentoDaPalavra-1);

while (contador < comprimentoDaPalavra) {
    if (contador < 0){
      break;
    } 
    console.log(palavraEscolhida[contador]);
    contador--;    
}
