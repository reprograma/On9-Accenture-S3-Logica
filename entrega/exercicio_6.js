'use strict';

const readlineSync = require('readline-sync');

function piramide() {
	let numero = readlineSync.question('Digite o números de linhas: ');
	let asterisco = '';
	for (let linha = 1; linha <= numero; linha++) {
		asterisco = asterisco + '*';
		console.log(asterisco);
	}
}
piramide();
