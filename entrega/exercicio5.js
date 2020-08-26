const readlineSync = require("readline-sync");


function menu () {
    console.log("===========================");
    console.log("Bem vindo a Loja Quase Dois");
    console.log("===========================");
    console.log(" ");
    console.log("O programa oferece as seguintes opcoes: ");
    console.log("-------------------------------------------------------");
    console.log("1- Acesso a tabela");
    console.log("2- Acesso a calculadora baseado na quantidade de itens");
    console.log("3- Sair");
    console.log("-------------------------------------------------------");
    
    let opcao = readlineSync.question ("Digite a opcao desejada: ");
    
    if(opcao == 1) {
        tabela();
    }

    if(opcao == 2) {

        let itens = readlineSync.question("Digite a quantidade de itens: ");
        calculaValor(itens);
    }

    if(opcao == 3) {
        end();
    }
}

function calculaValor(itens) {

    let valor = 0;
    let index=0

    for(index=1; index <= itens; index++) {

        valor += 1.99;

    } 
    console.log("O cliente vai pagar: R$ " + parseFloat(valor.toFixed(2)));
    
    setTimeout(menu, 10000);
}


function tabela() {

    let valor = 0;
    let index = 0;

    console.log("=====================================");
    console.log("Bem vindo a tabela da Loja Quase Dois");
    
    for(index = 1; index <= 50; index++) {
        
        valor += 1.99;
        console.log("| " + index + " - R$ " + parseFloat(valor.toFixed(2))+ " |");
        console.log("---------------------------------------");
    }

    setTimeout(menu, 10000);
    
}


function end() {

    if(true) {
        console.log("=================================");

        console.log("Obrigada por usar nossos serviços");

        console.log("=================================");
        
    }    
}



menu();