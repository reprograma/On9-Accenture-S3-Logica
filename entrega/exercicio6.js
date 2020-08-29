/** Exercício EXTRA 6 -  crie uma função que receba um número qualquer devolva o seguinte padrão como resultado 
 * (inclusive com os espaços). Por exemplo, caso receba o número 6 como parâmetro:

```
*
**
***
****
*****
******
```
 * 
 */

const readlineSync = require('readline-sync');

const number = readlineSync.question("Digite um número: ");
let line = ""; //line = linha
for (let index = 1; index<=number; index++){
    line = line + "*"
    console.log(line)
}
