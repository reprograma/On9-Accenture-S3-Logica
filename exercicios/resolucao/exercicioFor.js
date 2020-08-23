// 1. Imprima na tela os números pares existentes entre 0 e 100.

// Premissa [numero] % 2 === 0

for (let number = 0; number <= 100; number++) {
  if (number % 2 === 0) {
    console.log(number);
  }
}
console.log("==============");
console.log("IMPARES");
console.log("==============");
for (let index = 0; index <= 100; index++) {
  if (index % 2 !== 0) {
    console.log(index);
  }
}
