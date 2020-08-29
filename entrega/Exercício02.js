const readlineSync = require("readline-sync");
const palavra = readlineSync.question("Digite uma palavra que a mostrarei pelo avesso hehehe: ")
let posiçãoFinal = (palavra.length)
while(posiçãoFinal-1 >= 0){
    console.log(palavra[posiçãoFinal-1])
    posiçãoFinal--
}
//gostaria de saber como imprimir esse texto na tela de forma horizontal