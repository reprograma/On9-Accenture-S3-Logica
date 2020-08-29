//2- Programa disco da xuxa: receba um texto e imprima este texto invertido na tela

/* 

var string = readlineSync.question("Digite uma frase ou palavra: ")

function reverseString(string) {
    var resul= string.split("").reverse().join("")
    console.log(resul)
    return string.split("").reverse().join("");
}
reverseString(string); */

const readlineSync = require("readline-sync")

var word = readlineSync.question("Digite uma palavra: ")

function reverse_Str(){
    var inverse = ""
    for (let index = word.length-1; index >=0; index--){  //index faz o caminho inverso ---< 
    inverse = inverse + word[index] //adicionando a letra da posição >index< na string vazia
    }console.log("A palavra digitada foi >" + word+ "< e o inverso é >" + inverse+ "<")
} 
reverse_Str()

