const readlineSync = require("readline-sync");



function print (numero) { 
    
    
    for(let index =1; index<= numero; index++) {
        console.log(' '.repeat(numero-index)+ '*'.repeat(index));
    }
    
    
        
    

}

let numero = readlineSync.question("Digite um numero inteiro: ");

print(numero);
