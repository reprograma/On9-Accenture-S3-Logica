
let price = Number(1.99)
let quantityOfItems = 0;


for (quantityOfItems = 1; quantityOfItems <= 50; quantityOfItems ++) {
    console.log("Qtd itens: " + quantityOfItems + ", valor a pagar: R$" + (price * quantityOfItems).toFixed(2) + "reais")
}
