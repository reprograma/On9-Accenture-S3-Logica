const input = require("readline-sync");
const readlineSync = require("readline-sync");

const numero = parseInt(readlineSync.question("Digite um número inteiro para descobrir o Fibonacci correspondente: "));

// F(n+2)= F(n+1) + F(n)
//   a      b       c

let ultimo = Number(1)
let penultimo = Number(0)

switch (numero)
{
case 1:
    console.log("O número de Fibonacci correspondente é: 0")
break;
case 2:
    console.log("O número de Fibonacci correspondente é: 1")
break;
case 3:
    console.log("O número de Fibonacci correspondente é: 1")
break;
default:
    for (index=3; index<=numero; index++){
        let sequencia = ultimo + penultimo
        penultimo = ultimo
        ultimo = sequencia
}
console.log ("O número de Fibonacci correspondente é: " + ultimo)
break;
}




