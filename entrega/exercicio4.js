//Exercício 4 -  Crie uma função com as seguintes características:
// - A função deve receber 3 parâmetros
// - Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha todos os valores corretamente!"
// - O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.
const readlineSync = require('readline-sync');

function parametros (pa1, pa2, pa3){
    pa1 = readlineSync.question("Digite um número: ");
    pa2 = readlineSync.question("Digite um número: ");
    pa3 = readlineSync.question("Digite um número: ");    
    let calculo = (pa1 * pa2 * pa3) + 2

    if (pa1 == undefined || pa2 == undefined || pa3 == undefined){
        console.log("Preencha todos os valores corretamente! ")
        pa1 = readlineSync.question("Digite um número: ");
        pa2 = readlineSync.question("Digite um número: ");
        pa3 = readlineSync.question("Digite um número: ");
        
    }
    return calculo
}

let resultado = console.log("O resultado da multiplicação dos três valores + 2 é: " + parametros(2,2,2))