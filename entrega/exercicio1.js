let anos = 0;
let populacaoA = 80000;
let populacaoB = 200000;
let crescimentoA = 0.03;
let crescimentoB = 0.015;

while (populacaoA < populacaoB) {
    anos++;
    populacaoA = populacaoA + (populacaoA * crescimentoA);
    populacaoB = populacaoB + (populacaoB * crescimentoB); 
};

console.log("Tempo: " + anos);
console.log("País A: " + populacaoA.toFixed(3));
console.log("País B: " + populacaoB.toFixed(3));