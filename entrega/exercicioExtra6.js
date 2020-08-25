const readlineSync = require("readline-sync");



function print (numero) {  

    let aste ='';
    let espaco = ' ';

    for(i=0; i<numero; i++) {
        aste += '*';
        console.log(aste);
    }
    

}

let numero = readlineSync.question("Digite um numero inteiro: ");

print(numero);
