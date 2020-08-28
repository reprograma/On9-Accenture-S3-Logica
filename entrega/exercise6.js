/* 6. crie uma função que receba um número qualquer devolva o seguinte padrão como resultado (inclusive com os espaços). Por exemplo, caso receba o número 6 como parâmetro:

```
*
**
***
****
*****
******
``` */
const readlineSync = require("readline-sync");
let numeroDigitado = readlineSync.question("Digite um numero: ");
let linha = "";


function piramide(numero) {
    for (let index = 0; index <= numero - 1; index++) {
        linha = linha + "*"
        console.log(linha);
    }
}
piramide(numeroDigitado);