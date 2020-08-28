/* 4 - Crie uma função com as seguintes características:
- A função deve receber 3 parâmetros
- Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string:
 "Preencha todos os valores corretamente!"
- O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação. */

const readlineSync = require('readline-sync');

let entrada1 = readlineSync.question("Insira o numero 1: ");
let entrada2 = readlineSync.question("Insira o numero 2: ");
let entrada3 = readlineSync.question("Insira o numero 3: ");

function conta(numero1, numero2, numero3){
    while(numero1 === "" || numero2 === "" || numero3 === ""){
       console.log("\nPreencha todos os valores corretamente!\n");
       numero1 = readlineSync.question("Insira o numero 1: ");
       numero2 = readlineSync.question("Insira o numero 2: ");
       numero3 = readlineSync.question("Insira o numero 3: ");
    }
    let multiplicaESoma2 = (numero1 * numero2 * numero3) + 2;
    return console.log("Resultado = " + multiplicaESoma2);   
}

conta(entrada1, entrada2, entrada3);



//node entrega/exercicio04.js