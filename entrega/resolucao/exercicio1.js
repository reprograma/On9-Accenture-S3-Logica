// Supondo que a população de um país A seja da ordem de 80000
// habitantes com uma taxa anual de crescimento de 3% e que a
// população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%.
// Faça um programa que calcule e escreva o número de anos necessários
// para que a população do país A ultrapasse ou iguale a população do país B,
// mantidas as taxas de crescimento

let countryA = 80000;
const percentGrowingA = 3;

let countryB = 200000;
const percentGrowingB = 1.5;

let years = 0;
while (countryA <= countryB) {
  countryA += countryA * (percentGrowingA / 100);
  countryB += countryB * (percentGrowingB / 100);
  years++;
}

console.log(
  "Serão necessários " +
    years +
    " anos para a população de A ultrapassar a de B"
);
