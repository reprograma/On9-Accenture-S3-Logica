const readlineSync = require("readline-sync");

const linhas = readlineSync.question("Digite o número: ");
let desenho;

for(let cont1 = 0; cont1 <= linhas; cont1++){
    desenho = "";
    for(let cont2 = 0; cont2 < cont1; cont2++){
        desenho += "*";
    }
    console.log(desenho);
}