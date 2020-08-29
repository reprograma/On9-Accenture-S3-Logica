const input = require("readline-sync");
const readlineSync = require("readline-sync");

const numero = readlineSync.question("Insira um número:  ");
let linha = ""
let i=0
var espaço = ""
var tentativa

   
    
for (let index = 0; index<=numero-1; index++){
    for (let j = numero-1; j>=0; j--){
        
        while (i<j){
            i++;
            espaço=espaço+"e"} 
            
        }    
    linha=linha+"*"    
    console.log((linha+espaço).split('').reverse().join(''))
}

    
    
    


   
    
   