/* 1. Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e 
que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. 
Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, 
mantidas as taxas de crescimento */

// 80000 (100%) 3% a.a
const paisA = 80000;
const crescimentoA = 0.03; 
//const crescimentoA = (paisA*3)/100; 


// 200000 (100%) 1.5% a.a
const paisB = 200000;
const crescimentoB = 0.015;
//const crescimentoB = (paisB*1.5)/100; 

let resultA = "";
let resultB = "";
let anos = 0;

do {
  anos = anos + 1;
  resultA =  paisA +(paisA * crescimentoA);
  resultB = paisB +(paisB * crescimentoB);
} while (paisA < paisB);

console.log(resultA);
console.log(resultB);


let anos = 0;
while (paisA < paisB) {
  console.log(anos);
  anosr++; 
}