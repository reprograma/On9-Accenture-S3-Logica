
/*const readlineSync = require("readline-sync")

let nota = 0;
while ( nota < 0 || nota > 10) {
    nota = readlineSync.question("Digite uma nota entre 0 a 10: ");
    console.log(" Nota invalida " + nota) } */

//const { question } = require("readline-sync");


//console.log(" A nota digitada foi: " + nota)
//==============================================================
//const readlineSync = require("readline-sync");
/*let nota = 11;
while (nota < 0 || nota > 10) {
  nota = readlineSync.question("Digite uma nota válida: ");
}
console.log("A nota digitada foi: " + nota);*/

//=====================================================================
/*const readlineSync = require("readline-sync");
let nome =  readlineSync.question("Seu nome? ");
let senha = readlineSync.question("Senha?");
while( nome === senha) {
    console.log("Senha invalida")
    nome =  readlineSync.question("Seu nome? ");
    senha = readlineSync.question("Senha?");
} console.log( "Salvo")*/

//======================================================================

const readlineSync = require("readline-sync");

let nome = readlineSync.question("Qual seu nome ")
console.log("Olá " + nome);
let palavra = readlineSync.question("Digite uma palavra")
while( palavra != sair) {
     console.log( palavra)
    palavra = readlineSync.question("Digite uma palavra e tchau para sair ")
} console.log(Tchau)