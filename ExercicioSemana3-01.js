
paisA = 80000
paisB = 200000
tempo = 0
while (paisA < paisB){
     tempo ++;  
     paisA = paisA + (paisA * 0.03); 
     paisB = paisB + (paisB * 0.015);
 } 
console.log("Depois de " + tempo + " a população do país A " + paisA + " pais A e " + paisB + " pais B")


