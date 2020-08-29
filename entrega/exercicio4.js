//Crie uma função com as seguintes características:
//A função deve receber 3 parâmetros
//Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha todos os valores corretamente!"
//O retorno da função deve ser a multiplicação dos 3 parâmetros, somando 2 ao resultado da multiplicação.

var readlineSync = require("readline-sync")
const par1 = readlineSync.question ("Digite um numero: ")
const par2 = readlineSync.question ("Digite um numero: ")
const par3 = readlineSync.question ("Digite um numero: ")

function soma (par1, par2, par3){
    if (par1 === undefined, par2 === undefined, par3 === undefined){
        console.log ("Preencha os parametros corretamente!")
    }
    else{
        let calculo = ((par1*par2*par3)+2)
        console.log ("Resultado do calculo é "+calculo)
    }
}
soma(par1, par2, par3)