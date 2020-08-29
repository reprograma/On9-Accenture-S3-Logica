var desafio = function (numero1, numero2 , numero3) {

    if( numero1  === undefined || numero2 === undefined || numero3 === undefined) {
        return console.log("Preencha todos os valores corretamentes")}

    return (numero1*numero2*numero3 ) + 2

}
console.log(desafio(1,1,3))