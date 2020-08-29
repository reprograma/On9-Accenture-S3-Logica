const readlineSync = require("readline-sync");

const number = parseInt(readlineSync.question("Digite o número: "));
let a = 0, b = 1;
let c = 1;

if(number === 0){
    console.log("F" + number + " = 0");
}else{
    for(cont = 1; cont < number; cont++){
        c = a + b;
        a = b;
        b = c;
    }
    console.log("F" + number + " = " + c);
}