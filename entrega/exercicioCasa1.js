/*Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e
 que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva
  o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento
 */

let populacao1 = 80000;
let populacao2 = 200000;
let taxaDeCrescimento1 = 1.03;
let taxaDeCrescimento2 = 1.015;
let tempoDecorrido = 0;

while(populacao1 <= populacao2){
    populacao1 *= taxaDeCrescimento1;
    populacao2 *= taxaDeCrescimento2;
    tempoDecorrido++;  
    
}
console.log(`Em ${tempoDecorrido} anos, a população do país A será de ${parseInt(populacao1)} habitantes e terá ultrapassado a população do país que será de ${parseInt(populacao2)} habitantes`);


