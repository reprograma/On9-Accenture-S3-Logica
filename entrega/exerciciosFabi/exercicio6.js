/* ### Extra!!

1. crie uma função que receba um número qualquer devolva o seguinte padrão como resultado (inclusive com os espaços). 
Por exemplo, caso receba o número 6 como parâmetro:

```
*
**
***
****
*****
******
``` */

 console.log("1ª solução: ")

for ( let linha = "*"; linha.length < 7 ; linha += "*"){
    console.log(linha);
}

console.log("\n============================================")

console.log("\n2ª solução: ") 

const readlineSync = require("readline-sync");
let valor = Number(readlineSync.question("Escreva um número: "));

for (let linha = "*"; linha.length < valor+1; linha += "*"){
    console.log(linha)
}