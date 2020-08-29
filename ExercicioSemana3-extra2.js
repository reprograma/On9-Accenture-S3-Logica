/*prof,eu não consegui fazer esse extra 2, as meninas no whatsapp que falou sobre esse metodo repeat, realmente funcina,
mas eu não entendi como que isso funciona. 
teria como a senhora falar um pouco sobre isso?*/
const readlineSync = require("readline-sync");

let numero = readlineSync.question("Digite um número: ");

let asterisco = '';
let espaco = ' ';
	for (let linha = 1; linha <= numero; linha++) {
		asterisco = asterisco + '*';
		console.log(espaco.repeat(numero - asterisco.length) + asterisco);
	}
