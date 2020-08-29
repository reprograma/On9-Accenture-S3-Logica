let habitantesA = 80.000 
let habitantesB = 200.000
let anos = 0
while (habitantesA < habitantesB){
    habitantesA = habitantesA*1.03
    habitantesB = habitantesB*1.015
    anos++ 
    console.log("O número de anos é " + anos)
}
