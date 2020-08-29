//Crie uma função com as seguintes características:
//A função deve receber 3 parâmetros
//Se qualquer um dos três parâmetros não estiverem preenchidos, 
//a função deve retornar a string: "Preencha todos os valores corretamente!"
//O retorno da função deve ser a multiplicação dos 3 parâmetros, 
//somando 2 ao resultado da multiplicação.

const readlineSync = require("readline-sync");

let numeroUm = readlineSync.question("Digite o primeiro parametro: ")
let numeroDois = readlineSync.question("Digite o segundo parametro:: ")
let numeroTres = readlineSync.question("Digite o terceiro parametro: ")

function  multiplicação(numeroUm, numeroDois, numeroTres) {
 if (numeroUm === "" || numeroDois === "" || numeroTres === ""){
  console.log("Preencha todos os valores corretamente!")

    } else {
     let calcule = Number((numeroUm * numeroDois * numeroTres) + 2).toFixed(2);
     return calcule;
    }
}
   console.log(multiplicação(numeroUm, numeroDois, numeroTres))

