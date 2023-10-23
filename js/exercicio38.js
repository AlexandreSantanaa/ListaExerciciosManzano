function executarExercicio38(){
    alert("i) Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos.")

    let valor=[], soma=0, contador=0

    while(contador<10){
        valor[contador]=parseInt(prompt("Digite o numero " + (contador+1)))

        soma+=valor[contador]

        contador++
    }

    console.log("soma:"+soma)
    console.log('media:'+soma/(contador))
}