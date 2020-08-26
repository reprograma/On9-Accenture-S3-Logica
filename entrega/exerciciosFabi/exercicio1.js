/* 1. Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e 
que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. 
Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, 
mantidas as taxas de crescimento */

// 80000 (100%) 3% a.a
//const crescimentoA = (paisA*3)/100; 
// 200000 (100%) 1.5% a.a
//const crescimentoB = (paisB*1.5)/100; 


/*  primeira versão

do {
  
  resultA =  paisA +(paisA * 0.03);
  resultB = paisB +(paisB * 0.015);
  anos = anos + 1;
  
} while (paisA < paisB);

console.log(resultA, resultB, anos); */
 

  let paisA = 80000; 
  let paisB = 200000;
  anos = 0;

 while ( paisA < paisB) {
  paisA =  paisA +(paisA * 0.03);
  paisB = paisB +(paisB * 0.015);
  anos ++;
 } 

 console.log(anos+" Corresponde ao número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B")