let paisA = 80000;
let paisB = 200000;

const taxaCrescimentoA = 0.03;
const taxaCrescimentoB = 0.015; 

function calculoPais(){
    percentagemPaisA = 0;
    percentagemPaisB = 0;

    calculoPaisA = paisA;
    calculoPaisB = paisB;
    
    anoCalculo = 0;     

    while(calculoPaisA < calculoPaisB){
        percentagemPaisA = paisA * taxaCrescimentoA;
        percentagemPaisB = paisB * taxaCrescimentoB;

        calculoPaisA = paisA + percentagemPaisA;
        calculoPaisB = paisB + percentagemPaisB;
        
        paisA = calculoPaisA;
        paisB = calculoPaisB;
        anoCalculo++
   //console.log(paisA +" "+ paisB);
    } 
    console.log("Será necessário " + anoCalculo + " anos para o país A alcançar o país B.");
}
calculoPais();

