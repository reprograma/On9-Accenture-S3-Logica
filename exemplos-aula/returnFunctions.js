const readlineSync = require("readline-sync");

const nomeDigitado = readlineSync.question("Oi, tudo bem? Qual seu nome? ");
const anoNascimento = readlineSync.question("Que ano você nasceu? ");
let idade;
function digaOi(nome) {
  return "Oi, " + nome;
}

function calculaIdade() {
  idade = 2020 - anoNascimento;
}
calculaIdade();
console.log(digaOi(nomeDigitado));
console.log("Voce tem: " + idade + " anos");
