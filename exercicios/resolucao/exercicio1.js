const readlineSync = require("readline-sync");
let nota = 0;
while (nota < 0 || nota > 10) {
  nota = readlineSync.question("Digite uma nota válida: ");
}
console.log("A nota digitada foi: " + nota);
