const readlineSync = require("readline-sync");

let populaçãoA = 8000
let populaçãoB = 20000
let ano = 0

const taxaA = 0.03
const taxaB = 0.015

while (populaçãoA<populaçãoB) {
    ano ++ ;
    populaçãoA = populaçãoA + (populaçãoA * taxaA);
    populaçãoB = populaçãoB + (populaçãoB * taxaB);
}

console.log ("Precisa de " + ano + " anos para o país A ultrapassar o pais B" );

