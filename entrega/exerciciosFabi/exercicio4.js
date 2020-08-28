/* 1. Crie uma função com as seguintes características:
   - A função deve receber 3 parâmetros
   - Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha todos os valores corretamente!"
   - O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação. */

   const readlineSync = require("readline-sync");

   const num = Number(readlineSync.question("Digite um número: "));
   const num1 = Number(readlineSync.question("Digite um segundo número: "));
   const num2 = Number(readlineSync.question("Digite um terceiro número: "));

   funcao teste() {
      
      while (
         if (num === false || num1 === false || num2 === false){
            console.log("Preencha todos os valores corretamente!")
         }
      )
       else {
         console.log("Resultado final : "+(num * num1 * num2)+2)
      }
   }