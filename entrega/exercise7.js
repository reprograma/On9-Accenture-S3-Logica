/* 7. Refaça o exercício acima, porém agora com o seguinte padrão:

```
     *
    **
   ***
  ****
 *****
``` */

const readlineSync = require("readline-sync");
let numeroDigitado = readlineSync.question("Digite um numero: ");
let linha = "";
let espaco = " ";

function piramide(numero) {
     for (let index = 0; index <= numero - 1; index++) {
        linha = linha + "*"
        console.log(espaco.repeat(numero - linha.length) + linha);
    }
}
piramide(numeroDigitado);