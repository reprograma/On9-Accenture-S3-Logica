const readlineSync = require('readline-sync');

let numero = readlineSync.question("Digite um numero: ");
let asterisco = "";
let espaco = "";

let contador = 0;     
let cont = numero;
for( let index = numero ; index >= 1; index--){
     while( contador < index){
        espaco += " ";
        contador++;
    } 
    
    while( cont >= index){
        asterisco += "*";       
        cont--; 
    }
      
    console.log(espaco + asterisco);    
    cont =  numero; 
    contador = 0; 
    asterisco = ""; 
    espaco = "";  
}

//node entrega/extra02.js