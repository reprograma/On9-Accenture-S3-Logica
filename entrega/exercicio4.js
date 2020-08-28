
//exercicio 4


function exercicio(parametro1, parametro2, parametro3) {
    
  if(parametro1 === "" || parametro2 === "" ||parametro3 === "") {
    console.log("Preencha todos os valores corretamente!")
    }
  
  else{
  return parametro1*parametro2*parametro3 + 2; 
  }
}

   console.log(exercicio(5, 5,5));
