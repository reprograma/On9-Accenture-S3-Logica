const readlineSync = require("readline-sync");
function fibonacci(numero){
    let termo1 = 1
    let termo2 = 0
    let termo;

    while (numero >= 0){
      termo = termo1;
      termo1 = termo1 + termo2;
      termo2 = termo;
      numero--;
    }
    return termo2;
  }
  let mostrarTermo = readlineSync.question("Digite qual termo Fibonacci voce deseja saber ")
  while (isNaN(mostrarTermo)){
      mostrarTermo = readlineSync.question("Digite qual termo Fibonacci voce deseja saber ") ;
  } 
  console.log(fibonacci(mostrarTermo)) 
  