let qtdeProdutos = 50;
let precoTodosProdutos = 1.99;

function tabelaPrecosProdutos(){
    console.log("Lojas Quase Dois - Tabela de preços");
    for(let tabelaProduto = 1; tabelaProduto <= qtdeProdutos; tabelaProduto++){
        let precoTotalProdutos = precoTodosProdutos * tabelaProduto;
        let precoTotalCasasDecimais = precoTotalProdutos.toFixed(2);
        console.log(tabelaProduto + " - R$ " + precoTotalCasasDecimais);
    }

}
tabelaPrecosProdutos();