const input = require("readline-sync");


let cidadeA = 80000;
let cidadeB = 200000;
let anos = 0;

while(cidadeA < cidadeB){
  cidadeA += 0.03 * cidadeA;
  cidadeB += 0.015 * cidadeB;
  anos ++;
}

console.log("Será necessário um total de " + anos + " anos.");