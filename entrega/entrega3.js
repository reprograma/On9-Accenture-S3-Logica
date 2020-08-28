//A seqüência de Fibonacci é a seguinte: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ... Sua regra de formação é simples: 
//os dois primeiros elementos são 1; a partir de então, cada elemento é a soma dos dois anteriores. 
//Faça um algoritmo que leia um número inteiro calcule o seu número de Fibonacci. F1 = 1, F2 = 1, F3 = 2, etc.


function fibonacci(numero){
    var a = 1
    var b = 0
    var temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
    return b;
  }

  console.log(fibonacci(1))