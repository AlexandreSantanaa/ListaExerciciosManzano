function executarExercicio39(){
    alert("j) Elaborar  um  programa  que  apresente  os  resultados  da  soma  e  da  média  aritmética  dos  valores pares situados na faixa numérica de 50 a 70.")

    let contador=50, soma=0, quantidade=0

    while(contador<=70){
        if (contador % 2 === 0) {
            soma += contador;
            quantidade++;
        }
        contador++
    }

    console.log("sOMA:"+soma)
    console.log("Media:"+(soma/quantidade))
}