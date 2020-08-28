const readlineSync = require("readline-sync");
let parametro1 = readlineSync.question("digite um primeiro parâmentro: ")
let parametro2 = readlineSync.question("digite um primeiro parâmentro: ")
let parametro3 = readlineSync.question("digite um primeiro parâmentro: ")
function multiplicacao(param1, param2, param3){
    if(parametro1 ===undefined|| parametro2=== undefined|| parametro3=== undefined){
        return "preencha todos os valores corretamente"
    }
    return(param1*param2*param3)+2;
}
