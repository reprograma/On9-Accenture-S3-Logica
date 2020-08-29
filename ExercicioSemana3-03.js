const readlineSync = require("readline-sync");
const numero = readlineSync.question("Digite uma posição: ")
penultimo=1
ultimo=1
result=1
for(let fib = 3; fib<=numero ; fib++){
result = ultimo+penultimo
penultimo=ultimo
ultimo=result
}
console.log(result)
