const readlineSync = require("readline-sync");
const numero1 = Number(readlineSync.question("Digite o primeiro parametro : "));
const numero2 = Number(readlineSync.question("Digite o segundo parametro : "));
const numero3 = Number(readlineSync.question("Digite o terceiro parametro : "));

const teste = exercicioFuncion(numero1, numero2, numero3);

function exercicioFuncion(parametro1, parametro2, parametro3) {
  if (!parametro1 || !parametro2 || !parametro3) {
    return "Preencha todos os valores corretamente!";
  } else {
    const result = parametro1 * parametro2 * parametro3 + 2;
    return "O resultado foi de " + result;
  }
}

console.log(teste);
