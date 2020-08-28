/**Exercício 2 - Programa disco da xuxa: receba um texto e imprima este texto invertido na tela
 * 
 */
const readlineSync = require('readline-sync');

let text = readlineSync.question("Digite um texto: ");
let reverseText = text;
console.log(reverseText)
function reverse (text){
    return text.split('').reverse().join(''); 
    //o split separa os caracteres, o reverse vai inverter e o join vai juntar os caracteres de forma invertida

}
console.log(reverse(text))