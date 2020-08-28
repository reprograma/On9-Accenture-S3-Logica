//Crie uma função com as seguintes características:
//A função deve receber 3 parâmetros
//Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: 
//"Preencha todos os valores corretamente!"
//O retorno da função deve ser a multiplicação dos 3 parâmetros, somando 2 ao resultado da multiplicação.

let resultado;
function recebeTresParametros(parametroUm, parametroDois, parametroTres) {
    if (parametroUm == null || parametroDois == null || parametroTres == null) {
        return console.log("Preencha todos os valores corretamente!")
    }
    else {
        resultado = 2 + (parametroUm + parametroDois + parametroTres)
        return resultado
    }
}
console.log(recebeTresParametros(1, 2, 3));
