let paisA = 80000;
let paisB = 200000;
let ano = 0;

while (paisA <= paisB) {
    paisA = paisA + (paisA * 3/100);
    paisB = paisB + (paisB * 1.5/100);
    ano++
    
}
console.log("Mantidas as taxas de crescimento, serão necessários " + ano + " anos para que a população do país A ultrapase a do país B.")