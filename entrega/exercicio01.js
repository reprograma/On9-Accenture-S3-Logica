//1. Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% 
//e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. 
//Faça um programa que calcule e escreva o número de anos necessários para que a população do país A 
//ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento
let populacaoA = 80000;
let populacaoB = 200000;
let anos = 0;

const crescimentoA = 0.03;
const crescimentoB = 0.015;

while(populacaoA < populacaoB) {
    anos++;
    populacaoA = populacaoA + (populacaoA*crescimentoA);
    populacaoB = populacaoB + (populacaoB*crescimentoB);
    
    console.log(`Populacao A no ano ${anos} é de ${populacaoA}`)
    console.log(`Populacao B no ano ${anos} é de ${populacaoB}`)
}
console.log("Depois de " +anos+ " anos o país A ultrapassou o país B")