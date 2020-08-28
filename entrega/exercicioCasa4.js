const readlineSync = require("readline-sync");

let primeiroParametro = readlineSync.question('Insira o primeiro parâmetro: ');
let segundoParametro = readlineSync.question('Insira o segundo parâmetro: ');
let terceiroParametro = readlineSync.question('Insira o terceiro parâmetro: ');

function vaiFuncionar(parametro1, parametro2, paramentro3){
    if(!parametro1 || !parametro2 || !paramentro3){
        console.log('Preencha todos os valores corretamente!');
    }
    else{
        console.log(((parametro1*parametro2*paramentro3)+2))
    }
}

vaiFuncionar(primeiroParametro,segundoParametro,terceiroParametro);

/*Outra resolução possível com o apoio das meninas do grupo*/

// function vaiCalcular(parametro1, parametro2, paramentro3){
//     if(parametro1 === '' || parametro2 === '' || paramentro3 ===''){
//         console.log('Preencha todos os valores corretamente!');
//     }
//     else{
//         console.log(((parametro1*parametro2*paramentro3)+2))
//     }
// }

// vaiCalcular(primeiroParametro,segundoParametro,terceiroParametro);