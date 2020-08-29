'user strict';

const readlineSync = require('readline-sync');

function calculaFibonacci(n) {
	if (n <= 2) return n;

	return calculaFibonacci(n - 1) + calculaFibonacci(n - 2);
}

function mostraFibonacci() {
	let numero = readlineSync.question('Digite um número inteiro: ');
	let resultado = calculaFibonacci(parseInt(numero));

	console.log(`O Fibonacci de ${numero} é igual a ${resultado}.`);
}

mostraFibonacci();
