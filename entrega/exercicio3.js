
//exercicio 3

function fibonacci( numeroDoUsuario ) {
   
   console.log("Qual o valor inserido pelo usuário? " + numeroDoUsuario)
   
   let primeiroNumero = 0
   let segundoNumero = 1
   
   for (let index = 2; index <= numeroDoUsuario; index++) {
       let ultimoNumero = primeiroNumero;
       primeiroNumero = segundoNumero; 
       segundoNumero += ultimoNumero; 
   }
   return "O numero " + numeroDoUsuario + " da sequência de fibonacci é: " + segundoNumero;
 }
 console.log(fibonacci(10))




