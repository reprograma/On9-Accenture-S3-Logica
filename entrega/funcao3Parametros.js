const readlineSync = require('readline-sync');

let parameter1 = readlineSync.question("Digite o 1º parâmetro: ");
let parameter2 = readlineSync.question("Digite o 2º parâmetro: ");
let parameter3 = readlineSync.question("Digite o 3º parâmetro: ");

function multiplication(parameter1, parameter2, parameter3) {
    if (parameter1 === "" || parameter2 === "" || parameter3 === ""){
        console.log("Preencha todos os valores corretamente!");
    } else {
        let calculation = Number((parameter1 * parameter2 * parameter3) + 2).toFixed(2);
        return calculation;
    }
}

console.log(multiplication(parameter1, parameter2, parameter3));