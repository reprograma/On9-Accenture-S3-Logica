// 1-Supondo que a população de um país A seja da ordem de 80000
//habitantes com uma taxa anual de crescimento de 3% e que a população
//de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça
//um programa que calcule e escreva o número de anos necessários para
//que a população do país A ultrapasse ou iguale a população do país B,
//mantidas as taxas de crescimento.

const readlineSync = require("readline-sync");
let populA = 80000;
let populB = 200000;
let anos = 0;

const crescimentoA = 0.03;
const crescimentoB = 0.015;

while(populA < populB){
    anos++;
     populA = populA + (populA * crescimentoA);
     populB = populB + (populB * crescimentoB);
}

console.log("Depois de " +anos+ " Anos o país A ultrapassou o país B")