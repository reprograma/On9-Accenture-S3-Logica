const readlineSync = require("readline-sync");

const txtInput = readlineSync.question("Digite o texto: ");
let txtOutput = "";
const quantCarac = txtInput.length;

for(let cont = quantCarac-1; cont >= 0; cont--){
    txtOutput += txtInput[cont];
}

console.log(txtOutput);