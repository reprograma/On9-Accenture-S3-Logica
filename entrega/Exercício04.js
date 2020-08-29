const readlineSync = require("readline-sync");
function calculo(n1, n2, n3) {
        return (n1 * n2 * n3) + 2
    } 
let n1 = parseFloat(readlineSync.question("Digite um número: "))
let n2 = parseFloat(readlineSync.question("Digite outro número: "))
let n3 = parseFloat(readlineSync.question("Agora mais um número: "))
console.log(calculo(n1, n2, n3))

/*não sei como fazer o programa retornar outra coisa além de "NaN", quando algum
dos campos não for digitado corretamente*/