//uma função que receba três parametros. O retorno da função deve ser a multiplicação dos 3 parâmetros, 
//somando `2` ao resultado da multiplicação.
//Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: 
//"Preencha todos os valores corretamente!"

//primeiro momento: declarar a função - ou seja, escrever o que ela faz
const readlineSync = require("readline-sync");
let para1 = readlineSync.question("Digite o parâmetro 1:")
let para2 = readlineSync.question("Digite o parâmetro 2:")
let para3 = readlineSync.question("Digite o parâmetro 3:")
function conta(parametro1, parametro2, parametro3) {
    if(parametro1 == "" || parametro2 == "" || parametro3 == ""){
        return "Preencha todos os valores corretamente!"
    }
    return (parametro1 * parametro2 * parametro3) + 2;
  }
  
  //segundo momento: "chamar" a função quando queremos que ela seja executada
  console.log(conta(para1, para2, para3));
  //resultado: 2