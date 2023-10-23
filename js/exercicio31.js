function executarExercicio31(){
    alert("a) Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.")

    let valor = parseInt(prompt("Digite um numero"))
    let contador = 0;

    while(contador<=10){
        console.log(valor+"x"+contador+'='+valor*contador)
        contador++
    }
 
}