/* 1. Crie uma função com as seguintes características:
   - A função deve receber 3 parâmetros
   - Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha todos os valores corretamente!"
   - O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação. */
 
    const readlineSync = require("readline-sync");

   let num = Number(readlineSync.question("Digite um número: "));
   let num1 = Number(readlineSync.question("Digite um segundo número: "));
   let num2 = Number(readlineSync.question("Digite um terceiro número: ")); 


   function teste(objeto) {
      objeto.num = true;
      objeto.num1 = true;
      objeto.num2 = true;
      
       if ( num1=== false || num1 === false || num2 === false){
          console.log("Preencha todos os valores corretamente!") 
      }
      return  console.log("Resultado final : "+(num * num1 * num2)+2)
      }
   