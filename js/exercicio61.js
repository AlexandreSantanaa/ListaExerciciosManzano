function executarExercicio61() {
  alert(
    "k) Elaborar  um  programa  que  apresente  como  resultado  o  valor  do  fatorial  dos  valores  ímpares situados na faixa numérica de 1 a 10."
  );

  

  for (let j = 1; j<= 10; j+=2) {
    let fatorial = 1;  
      
    for (let i = 0; i<j; i++) {
      fatorial *= (j-i);
    }
    console.log("fatorial de " + j +" = " + fatorial);
  }
}
