/* 1. Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento 
de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. 
Faça um programa que calcule e escreva o número de anos necessários para que a população do país A 
ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento */

/* premissas
país A 80000 habitantes / 3% crescimento a.a
país B 200000 habitantes / 1.5% crescimento a.a */

let paisA = 80000 

let paisB = 200000

let somaAnos = "1"

while(paisA < paisB){
    paisA =  paisA +(paisA * 0.03);
    paisB = paisB +(paisB * 0.015);

    console.log( "Levará "  +  somaAnos  + " para que as populações de igualem ou ultrapassem uma a outra")
    somaAnos++
}


