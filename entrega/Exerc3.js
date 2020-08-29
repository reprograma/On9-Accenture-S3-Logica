// 3. A seqüência de Fibonacci é a seguinte: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ... Sua regra de formação é
//simples: os dois primeiros elementos são 1; a partir de então, cada elemento é a soma dos dois anteriores.
//Faça um algoritmo que leia um número inteiro calcule o seu número de Fibonacci. F1 = 1, F2 = 1, F3 = 2, etc.

const readlineSync = require("readline-sync");
let userNumber = (readlineSync.question("Insira um valor inteiro: "));

function fibonacci(numeroUsuario) {

    let primeiroNum = 0
    let segundoNum = 1
    
    for(let index = 2; index <= userNumber; index++) {
        console.log("Em qual iteração estamos?" +index)
        let ultimoNumero = primeiroNum; 
         primeiroNum = segundoNum; 
         ultimoNumero += segundoNum;
     }

    return userNumber;
    }
    console.log(fibonacci(4))
