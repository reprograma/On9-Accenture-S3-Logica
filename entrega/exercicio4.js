const readlineSync = require("readline-sync");

let parametro1 = readlineSync.question("Digite um numero ");
let parametro2 = readlineSync.question("Digite um numero ");
let parametro3 = readlineSync.question("Digite um numero ");

function calcular(num1, num2, num3){
   return ((parametro1 * parametro2 * parametro3) + 2)
}

while (isNaN(parametro1) || isNaN(parametro2) || isNaN(parametro3)){
    console.log("preencha os valores corretamente")
    parametro1 = readlineSync.question("Digite um numero inteiro ");
    parametro2 = readlineSync.question("Digite um numero inteiro ");
    parametro3 = readlineSync.question("Digite um numero inteiro ");
} 
console.log(calcular(parametro1, parametro2, parametro3));
