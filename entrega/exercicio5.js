for (i = 1; i <= 50; i++) {
  const valor = preco(i);
  console.log(i + " - R$ " + valor.toFixed(2));
}

function preco(numero) {
  const valorProduto = 1.99;
  return numero * valorProduto;
}
