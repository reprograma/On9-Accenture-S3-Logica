let populationA = Number(80000);
let growthRateA = Number(3/100);

let populationB = Number(200000);
let growthRateB = Number(1.5/100);

let numberOfYears = 0;

do {
    populationA = (populationA * growthRateA) + populationA;
    populationB = (populationB * growthRateB) + populationB;
    numberOfYears ++;
} while (populationA < populationB)

console.log("O número de anos necessários para que a população do país A ultrapasse a população do país B é de " + numberOfYears + " anos!")
