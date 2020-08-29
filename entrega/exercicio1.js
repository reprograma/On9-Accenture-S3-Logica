//Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa 
//anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa 
//de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que 
//a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento 

const readlineSync = require("readline-sync")

let popA = 80000
let popB = 200000
let anos = 0
const cresA = 0.03
const cresB = 0.015

while (popA < popB) {
    anos+=1
    popA = popA + (popA * cresA)
    popB = popB + (popB * cresB)
}

console.log("Após "+ anos + " anos o país A ultrapassou o B" )
console.log("País A: " + (popA).toFixed(2) )
console.log("País B: " + (popB).toFixed(2) )