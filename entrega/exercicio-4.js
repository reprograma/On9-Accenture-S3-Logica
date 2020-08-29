const readlineSync = require("readline-sync");

function calculo(n1, n2, n3){
    if(n1 != "" & n2 != "" & n3 != ""){
        const result = (n1 * n2 * n3);
        return result + 2;
    }else{
        return "Preencha todos os valores corretamente!";
    }
}

const a = readlineSync.question("Digite o primeiro número: ");
const b = readlineSync.question("Digite o segundo número: ");
const c = readlineSync.question("Digite o terceiro número: ");

console.log(calculo(a, b, c));