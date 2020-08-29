const readlineSync = require("readline-sync")
let numero = Number(readlineSync.question("Quantos numero voce quer mostar da sequencia de fibonacci? "))

let f1 = 0;
let f2 = 1;
contador = 0;
while ( contador <= numero){
    f3 = f1 + f2;
    console.log(f3)
    f1 = f2;
    f2 = f3;
    contador++;
}



