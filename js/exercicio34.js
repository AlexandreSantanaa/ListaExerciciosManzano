function executarExercicio34(){
    alert("d) Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.")

    let contador=0

    while(contador<=20){
        console.log((contador%2==0)?"":contador)
        contador++
    }
}