const readlineSync = require("readline-sync");



function funcao (num1, num2, num3) {
    return ((numero1*numero2*numero3) + 2);
};

let numero1 = false
let numero2 = false
let numero3 = false

numero1 = readlineSync.question("Digite um numero inteiro: ");
numero2 = readlineSync.question("Digite um numero inteiro: ");
numero3 = readlineSync.question("Digite um numero inteiro: ");

if (numero1 == false || numero2 == false || numero3 == false) {

    console.log("Preencha todos os valores corretamente");
    numero1 = readlineSync.question("Digite um numero: ");
    numero2 = readlineSync.question("Digite um numero: ");
    numero3 = readlineSync.question("Digite um numero: ");

}

console.log(funcao(numero1, numero2, numero3)); 