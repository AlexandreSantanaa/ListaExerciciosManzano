function executarExercicio53(){
    alert("b) Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.")
    
    let numero = parseInt(prompt("Digite um valor:"))

    for(let i =0; i<=10; i++){
        console.log(numero+"x"+i+"="+numero*i)
    }
}