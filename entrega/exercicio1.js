let populacaoA = 80000;
let populacaoB = 200000;
let ano = 0;

const crescimentoA = 0.03;
const crescimentoB = 0.015;

while(populacaoA < populacaoB) {
    ano++;
    populacaoA = populacaoA + (populacaoA*crescimentoA);
    populacaoB = populacaoB + (populacaoB*crescimentoB);
    console.log(populacaoA, populacaoB, ano)
}

console.log("A população do país A ultrapassou a população do país B após " +ano+ " anos!");