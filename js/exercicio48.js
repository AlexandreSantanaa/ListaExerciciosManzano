function executarExercicio48(){
    alert("g) Elaborar  um  programa  que  apresente  como  resultado  o  valor  do  fatorial  dos  valores  ímpares situados na faixa numérica de 1 a 10.")

    let valor=0, contador=0, fatorial=1

    do{
        valor=contador
        fatorial=1

        if(valor%2!=0){
            do {
                fatorial*=valor
                valor--
            } while (valor>=1);
            console.log("fatorial "+contador+" = "+fatorial)
        }
        contador++
    }while(contador<=10)
}