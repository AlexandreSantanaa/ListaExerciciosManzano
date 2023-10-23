function executarExercicio33(){
    alert("c) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.")

    let contador=1, soma=0

    while(contador<=500){
        soma+=(contador%2==0)?contador:0
        contador++
    }
    console.log(soma)
}
