//2- Programa disco da xuxa: receba um texto e imprima este texto invertido na tela

const nome = "É a turma da xuxa que vai dar o seu alô";
let textoInvertido

for (let counter = nome.length; counter >= 0; counter--) {
    textoInvertido = textoInvertido + nome[counter]
}
console.log(textoInvertido)
