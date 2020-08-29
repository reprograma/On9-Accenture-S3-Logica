const readlineSync = require("readline-sync")
let number = readlineSync.question("Quantos termos você quer mostrar? ")

let termo1 = 0;
let termo2 = 1;

let count = 3;

console.log(termo1)
console.log(termo2)

while (count <= number) {
    let termo3 = termo1 + termo2
    termo1 = termo2
    termo2 = termo3
    count += 1
    console.log(termo3)
}