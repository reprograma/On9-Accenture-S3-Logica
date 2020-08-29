console.log(`Loja Quase Dois - Tabela de preços\nNúmero de Itens -> Preço\n`)

let precoTabela = 0;
for (let qtdProdutos = 1; qtdProdutos <= 50; qtdProdutos++) {
    precoTabela = qtdProdutos * 1.99;
    console.log(`${qtdProdutos} = R$ ${precoTabela}`)
}

