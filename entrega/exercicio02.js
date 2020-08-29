const readlineSync = require("readline-sync")

let texto = readlineSync.question("Qual texto, Xuxa? ")

let count = ""

for (let letra = texto.length -1; letra >= 0; letra--) {
    count += texto[letra]
}

console.log(count)