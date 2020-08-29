'use strict';

const readlineSync = require('readline-sync');

function checaEFazConta(a, b, c) {
	if (a === undefined || b === undefined || c === undefined) {
		console.log('Preencha todos os valores corretamente!');
	} else {
		let calculo = a * b * c + 2;
		console.log(calculo);
	}
}

checaEFazConta();
