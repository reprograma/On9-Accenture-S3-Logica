
const readlineSync = require("readline-sync");
let parametro1 = readlineSync.question("digite um primeiro parâmentro: ")
let parametro2 = readlineSync.question("digite um primeiro parâmentro: ")
let parametro3 = readlineSync.question("digite um primeiro parâmentro: ")
let resultado
function multiplicaNumeros (p1, p2, p3){
    let resultado = (parametro1 * parametro2 * parametro3) + 2;
    return resultado
} 
if (parametro1 == 0 || parametro2 == 0 || parametro3 == 0){
    console.log("Preencha todos os valores corretamente!")
} else {
    console.log(multiplicaNumeros(resultado))
}
