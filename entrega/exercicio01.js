let paisA = 80000
let paisB = 200000

let anos = 0
while (paisA < paisB) {
    paisA += (paisA * 0.03); //Ou sem utilizar operador de soma e atribuição:
    paisB = paisB + (paisB * 0.015);
    anos++
    console.log(`Anos = ${anos} População A = ${paisA} População B = ${paisB}`)
}

