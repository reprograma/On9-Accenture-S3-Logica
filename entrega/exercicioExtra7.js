const readlineSync = require("readline-sync");



function print (numero) {  
    let apoio = '';
    let numeroApoio = numero;
    let aste ='';
    let cont = 0;

        while(cont < numero) {

            apoio[cont] += apoio[cont].unshift(' ');
            cont++;

        }

        for(i=0; i < numero; i++) {

            
            aste += '*';
            console.log(apoio[numeroApoio] + aste);
            numeroApoio--;
        }
        
        
    

}

let numero = readlineSync.question("Digite um numero inteiro: ");

print(numero);
