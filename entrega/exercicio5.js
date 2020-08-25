produtos = 1;
valor = 1.99;

console.log("Lojas Quase Dois - Tabela de preços");

while (produtos <= 50) {
    preço = produtos * valor;
    console.log(produtos + " - " + preço);
    produtos ++;
};