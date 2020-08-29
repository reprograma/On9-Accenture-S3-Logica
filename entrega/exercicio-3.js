const readlineSync = require("readline-sync")

let numero = readlineSync.question( "Insira um numero inteiro: " )

function sequenciaFibonacci(){
    let elemento1 = 0;
    
    let elemento2 = 1;

for(let index = 2; index <= numero; index++){
    let ultimoElemento = elemento1
        elemento1 = elemento2
        ultimoElemento += elemento2    
    
}

    return ultimoElemento

}
console.log(sequenciaFibonacci)

