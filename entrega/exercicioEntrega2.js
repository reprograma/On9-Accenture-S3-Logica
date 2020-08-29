const readlineSync = require("readline-sync");

const textoInvertido = readlineSync.question("Escreva uma frase: ");
console.log("A sua frase digitada foi: " + textoInvertido);

//Para inverter a frase foi necessário transformá-la em array com a função split("") e depois
//usei a função reverse() para inverter o array(as letras) e por fim a função join("") para juntar os campos em uma string;
function discoXuxa(){
    console.log("Ela invertida ficou: " + textoInvertido.split("").reverse().join(""));
  
} 
discoXuxa();