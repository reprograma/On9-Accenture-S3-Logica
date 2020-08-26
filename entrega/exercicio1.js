let populacaoA = 80000;
let populacaoB = 200000;
let anos = 0;

const crescimentoA = 0.03;
const crescimentoB = 0.015;

while(populacaoA < populacaoB) {
    anos++;
    populacaoA = populacaoA + (populacaoA*crescimentoA);
    populacaoB = populacaoB + (populacaoB*crescimentoB);
    
}
console.log("Depois de " +anos+ " anos o país A ultrapassou o país B");