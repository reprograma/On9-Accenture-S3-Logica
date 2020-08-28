const readlineSync = require("readline-sync");
let limiteDeDegraus = Number(readlineSync.question('Quantos degraus você quer que sua escada tenha?'));
let degrau = '*';
let espaco = ' '

for (let contador = 1; contador <= limiteDeDegraus; contador++) {
    console.log(espaco.repeat(limiteDeDegraus-contador) + degrau.repeat(contador));

}
