let paisA = 80000;

let paisB = 200000;

let anos = 0;

function igualarPopulacao() {
  do {
    anos++;

    paisA += paisA * 0.03;
    paisB += paisB * 0.015;

    // console.log(paisA.toFixed(2) + " | " + paisB.toFixed(2));
  } while (paisA <= paisB);
  console.log(
    "Em " + anos + " a população do país A ultrapassará a população do país B!"
  );
}

igualarPopulacao();
