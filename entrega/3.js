const readlineSync = require("readline-sync");
let numberUser = readlineSync.question("Digite um número inteiro que represente a posição desajada na seqüência Fibonacci:");
function fibonacci(numeroDoUsuario) {

    let primeiroNumero = 0
    let segundoNumero = 1

    for (let index = 2; index <= numeroDoUsuario; index++) {

        let ultimoNumero = primeiroNumero;
        primeiroNumero = segundoNumero;
        segundoNumero += ultimoNumero;
    }
    return "O numero que corresponde a posição" + numeroDoUsuario + " na sequência de fibonacci é: " + segundoNumero;
  }

  console.log(fibonacci(numberUser))