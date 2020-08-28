/* 1. crie uma função que receba um número qualquer devolva o seguinte padrão como resultado
(inclusive com os espaços). Por exemplo, caso receba o número 6 como parâmetro:

```
*
**
***
****
*****
******
``` */

const readlineSync = require('readline-sync');

let numero = readlineSync.question("Digite um numero: ");
let saida = "";

let contador = 0;     
for( let index = 0; index <= numero-1; index++){
    while( contador <= index){
        saida += "*";       
        contador++;
    }   
    contador = 0; 
    console.log(saida);    
    saida = "";   
}

//node entrega/extra01.js