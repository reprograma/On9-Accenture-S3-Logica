'use strict';

const readlineSync = require('readline-sync');

let numero = readlineSync.question('Digite o números de linhas: ');

function piramideInvertida() {
	let asterisco = '';
	let espaco = ' ';
	for (let linha = 1; linha <= numero; linha++) {
		asterisco = asterisco + '*';
		console.log(espaco.repeat(numero - asterisco.length) + asterisco);
	}
}

piramideInvertida();
