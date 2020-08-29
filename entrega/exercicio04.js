const readlineSync = require("readline-sync")

const numero1 = readlineSync.question("Primeiro numero:")
const numero2 = readlineSync.question("Segundo numero:")
const numero3 = readlineSync.question("Terceiro numero:")

let resultado

function multiplicaNumeros (parametro1, parametro2, parametro3){
    let resultado = (numero1 * numero2 * numero3) + 2;
    return resultado
} 

if (numero1 == 0 || numero2 == 0 || numero3 == 0){
    console.log("Preencha todos os valores corretamente!")
} else {
    console.log(multiplicaNumeros(resultado))
}



