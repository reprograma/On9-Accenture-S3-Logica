const readlineSync = require("readline-sync")

let para1 = readlineSync.question("Digite o primeiro numero:");
let para2 = readlineSync.question("Digite o segundo numero:");
let para3 = readlineSync.question("Digite o terceiro numero:");

function tresParametros(para1, para2, para3){  
    if (para1 === "" || para2 === "" || para3 === ""){
        console.log ("Preencha todos os valores corretamente!");
    }else {
        let resultado = Number((para1 * para2 * para3) + 2);
        return resultado;
    }

}

console.log("Resultado:" + tresParametros(para1, para2, para3)); 

