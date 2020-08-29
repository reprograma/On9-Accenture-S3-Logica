const readlineSync = require("readline-sync");


function fibonacci(numero) {

    let num1 = 0;
    let num2 = 1;
    let num3 = 0;
    let contador = 1;

    if(numero == 1 || numero == 2) {
        return 1;
    }

    else {

        while(contador <= numero-1) {
            num3 = num2 + num1;
            num1 = num2;
            num2 = num3;

            contador++;
        }
        return num3;



    }

}


let numero = parseInt(readlineSync.question("Digite um numero"));
console.log(fibonacci(numero));