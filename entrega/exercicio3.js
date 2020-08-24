const readlineSync = require("readline-sync");


function fibonacci(numero) {

    let termo1 = 0;
    let termo2 = 1;
    let termo3 = 0;
    let contador = 1;

    if(numero == 1 || numero == 2) {
        return 1;
    }

    else {

        while(contador <= numero-1) {
            termo3 = termo2 + termo1;
            termo1 = termo2;
            termo2 = termo3;

            contador++;
        }
        return termo3;

        
        
    }

}


let numero = parseInt(readlineSync.question("Digite um numero inteiro: "));
console.log(fibonacci(numero));
