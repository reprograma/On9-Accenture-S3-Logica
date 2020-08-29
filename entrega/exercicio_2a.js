'use strict';

const readlineSync = require('readline-sync');
let invertido = "";

function inverteTexto2() {
	let texto = readlineSync.question('Digite um texto, por favor: ');
	for (let i = texto.length - 1; i >= 0; i--) {
		invertido = invertido + texto[i];
	}		
	console.log(`O texto ${texto} invertido é ${invertido}.`);

}
inverteTexto2();

