let anos = 0;
let paisA = 80000, paisB = 200000;

while(paisA < paisB){

    anos++;
    paisA += paisA * 0.03;
    paisB += paisB * 0.015;

}

console.log("Quantidade de anos necessários: " + anos);

console.log("País A: " + paisA);
console.log("País B: " + paisB);