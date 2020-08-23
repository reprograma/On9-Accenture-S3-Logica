const readlineSync = require("readline-sync");

let nome = readlineSync.question("Qual seu nome? ");
let texto = "";

while (texto !== "Tchau") {
  texto = readlineSync.question(
    "Digite qualquer coisa e quando sair, digite tchau! "
  );
}

console.log("Tchau, " + nome);
