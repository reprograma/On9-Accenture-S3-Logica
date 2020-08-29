/**Exercício 1 - Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% 
 * e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. 
 * Faça um programa que calcule e escreva o número de anos 
 * necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento
 * 
 */
const readlineSync = require('readline-sync');

let populacaoA = 80000;
let crescimentoA = 0.03;
let populacaoB = 200000;
let crescimentoB = 0.015;
let anos = 0;
do {
    populacaoA = (populacaoA * crescimentoA) + populacaoA;
    populacaoB = (populacaoB * crescimentoB) + populacaoB;
    anos ++
} while (populacaoA <= populacaoB) {
    console.log("O número de anos necessários para que a população do país A ultrapasse ou se iguale a população do país B é: " + anos + "anos!")
}