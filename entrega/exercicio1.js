let populacaoA = 80000;
let populacaoB = 200000;
let anos = 0;
const taxaCrescA = 0.03;
const taxaCrescB = 0.015;

while (populacaoA < populacaoB) {
  populacaoA = populacaoA + populacaoA * taxaCrescA;
  populacaoB = populacaoB + populacaoB * taxaCrescB;
  anos += 1;
}
if (populacaoA === populacaoB) {
  console.log(
    "Após " +
      anos +
      " anos o país A se igualou o país B em número de habitantes"
  );
} else {
  console.log(
    "Após " +
      anos +
      " anos o país A  ultrapassou o país B em número de habitantes"
  );
}
