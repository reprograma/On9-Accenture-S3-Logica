//4. Crie uma função com as seguintes características:
//- A função deve receber 3 parâmetros
//- Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha
//todos os valores corretamente!"
//- O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.

const readlineSync = require("readline-sync");

let param1 = readlineSync.question("Digite o primeiro numero:");
let param2 = readlineSync.question("Digite o segundo numero:");
let param3 = readlineSync.question("Digite o terceiro numero:");

function multiplicacao( para1, para2, para3 ) { 
     if (param1 == ""|| param2 == ""|| para3 == "") {
          return "Preencha todos os valores corretamente" }
       return(para1*para2*para3)+2;}
       
       
