function executarExercicio26(){
    alert("h. Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores.")

    let valor=[], maior = 0, menor=0

    for(let i=0; i<5;i++){
        valor[i]=parseInt(prompt("Digite o numero " + (i+1)))
    }

    maior = Math.max(...valor)
    menor = Math.min(...valor)

    alert('Maior:'+maior+"Menor:"+menor)


}