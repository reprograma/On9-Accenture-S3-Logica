'use strict';

const readlineSync = require('readline-sync');

function rodaTabela() {
	let precoUnitario = 1.99;
	let total;

	console.log('Lojas Quase Dois - Tabela de preços');

	for (let contador = 1; contador <= 50; contador++) {
		total = precoUnitario * contador;
		console.log(`${contador} - R$${total.toFixed(2)}`);
	}
}

rodaTabela();
