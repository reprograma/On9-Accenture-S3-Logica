let a = 80000
let b = 200000;

let ano = 0;       

do { 

a = a + a * 0.03; 

b = b + b * 0.015; 
ano = ano + 1;  

} while (a <= b );

console.log( "Anos: " + ano ); 