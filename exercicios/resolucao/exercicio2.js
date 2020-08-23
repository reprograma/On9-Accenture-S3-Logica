const readlineSync = require("readline-sync");

let nomeUsuario = readlineSync.question("Nome de usuário: ");
let senha = readlineSync.question("Senha: ");

while (senha === nomeUsuario) {
  console.log("Informações inválidas");
  console.log("Refaça o cadastro");
  nomeUsuario = readlineSync.question("Nome de usuário: ");
  senha = readlineSync.question("Senha: ");
}

console.log("Informações corretas");
