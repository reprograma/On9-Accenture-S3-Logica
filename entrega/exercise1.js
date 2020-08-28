/* 1 - Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento */

let countryA = 80000;
let countryB = 200000;
let years = 0;

while (countryA <= countryB) {
    countryA = countryA * 1.03;
    countryB = countryB * 1.015;
    years += 1;
}

console.log("Após " + years + " anos a população do país A ultrapassou a população do país B.");