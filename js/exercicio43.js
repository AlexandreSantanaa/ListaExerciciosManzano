function executarExercicio43(){
    alert("b) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500")

    let contador=0, soma=0
    do {
        soma+=contador
        contador++
    } while (contador<=500);
    console.log(soma)
}