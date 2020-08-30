const readlyneSync = require("readline-sync");

const text = readlyneSync.question("Digite o valor de N: ");
let inverseText = "";
for (let letter = text.length - 1; letter >= 0; letter--) {
  inverseText += text[letter];
}

console.log(inverseText);
