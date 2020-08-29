//Desafio 1

var readlineSync = require("readline-sync")
const tamanho = readlineSync.question ("Digite um numero: ")

function ocultar (){
    oculto = ""
    for(let index = tamanho-1; index >=0; index--){
        oculto=oculto+"*" //vai adicionar * ao inves dos números
        console.log(oculto)
    }
}ocultar()
