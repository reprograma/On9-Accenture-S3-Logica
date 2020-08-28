const readlineSync = require("readline-sync");

let fraseDigitada = readlineSync.question("Oi, digite uma frase, por favor :"); {
   console.log("Sua frase digitada ao contrário ficou assim:", fraseDigitada.split('').reverse().join(''))
}
  

