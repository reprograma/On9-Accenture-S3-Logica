//Crie uma função com as seguintes características:
  // - A função deve receber 3 parâmetros
  // - Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha todos os valores corretamente!"
  // - O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.

  const input = require("readline-sync");
  const readlineSync = require("readline-sync");
  
let parametro1= (readlineSync.question("Digite o parâmetro 1: "));
let parametro2= (readlineSync.question("Digite o parâmetro 2: "));
let parametro3= (readlineSync.question("Digite o parâmetro 3: "));

 //while ( parametro1 = "") {
    //let parametro1= Number(readlineSync.question("Preencha todos os valores corretamente! "));
    //}

    function minhafunçao(parametro1,parametro2,parametro3) {
      console.log(parametro1)
      if ((parametro1=="") || (parametro2 == "")|| (parametro3=="")) {
        console.log("insira os parametros corretamente")
      }else{
        let resultado = Number(parametro1*parametro2*parametro3*2)
        console.log(resultado)
      }
    }
    
    

    minhafunçao(parametro1,parametro2,parametro3)
