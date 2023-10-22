function executarExercicio17(){
    alert("a. Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.")

    let valor01 =0, valor02=0
    valor01= parseInt(prompt("Digite o valor 01: "))
    valor02= parseInt(prompt("Digite o valor 02: "))

    let diferenca = (valor01>valor02)?console.log("Diferença:"+(valor01-valor02)):console.log("Diferença:"+(valor02-valor01))
}