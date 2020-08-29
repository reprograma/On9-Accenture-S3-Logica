'use strict';

const readlineSync = require('readline-sync');
const txCresceA = 3 / 100;
const txCresceB = 1.5 / 100;

let paisA = 80000;
let paisB = 200000;
let anos = 0;

let acrescePorAno = paisA * txCresceA;
let bcrescePorAno = paisB * txCresceB;

while (paisA < paisB) {
	anos++;
	paisA = paisA + acrescePorAno;
	paisB = paisB + bcrescePorAno;
}

console.log(
	`Após ${anos} ano a população do país A ultrapassou a população do país B `
);
console.log(`População do país A será de: ${paisA}.`);
console.log(`População do país B será de: ${paisB}.`);
