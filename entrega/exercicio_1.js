'use strict';

const readlineSync = require('readline-sync');

let paisA = 80000;
let paisB = 200000;
const txCresceA = 3 / 100;
const txCresceB = 1.5 / 100;

let anos = 0;

while (paisA <= paisB) {
	anos++;
	paisA = paisA + paisA * txCresceA;
	paisB = paisB + paisB * txCresceB;
}

console.log(
	`Após ${anos} anos a população do país A ultrapassou a população do país B `
);
console.log(`População do país A será de: ${paisA.toFixed()}.`);
console.log(`População do país B será de: ${paisB.toFixed()}.`);
