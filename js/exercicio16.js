function executarExercicio16(){
    alert("c) Em  uma  eleição  sindical  concorreram  ao  cargo  de  presidente  três  candidatos  (A,  B  e  C).  Durante  a apuração  dos  votos  foram  computados  votos  nulos  e  votos  em  branco,  além  dos  votos  válidos  para cada  candidato.  Deve  ser  criado  um  programa  de  computador  que  efetue  a  leitura  da  quantidade  de votos  válidos  para  cada  candidato,  além  de  efetuar    também  a  leitura  da  quantidade  de  votos  nulos  e votos em branco. Ao final o programa deve apresentar o número total de eleitores, considerando votos válidos, nulos e em branco; o percentual correspondente de votos válidos em relação à quantidade de eleitores;  o  percentual  correspondente  de  votos  válidos  do  candidato  A  em  relação  à  quantidade  de eleitores;  o  percentual  correspondente  de  votos  válidos  do  candidato  B  em  relação  à  quantidade  de eleitores;  o  percentual  correspondente  de  votos  válidos  do  candidato  C  em  relação  à  quantidade  de  eleitores; o percentual correspondente de votos nulos em relação à quantidade de eleitores; e por último o percentual correspondente de votos em branco em relação à quantidade de eleitores.")

    let candidatoA = parseInt(prompt("Digite a quantidade de votos do candidato A:"))
    let candidatoB = parseInt(prompt("Digite a quantidade de votos do candidato B:"))
    let candidatoC = parseInt(prompt("Digite a quantidade de votos do candidato C:"))

    let votoNulo = parseInt(prompt("Digite a quantidade de votos nulos"))
    let votoBranco = parseInt(prompt("Digite a quantidade de votos brancos"))
    let votoValido = candidatoA+candidatoB+candidatoC

    let totalEleitores = votoNulo+votoBranco+votoValido

    console.log("Numero total de eleitores:"+totalEleitores)
    console.log("Numero total de votos do candidato A:"+100*(candidatoA/totalEleitores))
    console.log("Numero total de votos do candidato B:"+100*(candidatoB/totalEleitores))
    console.log("Numero total de votos do candidato C:"+100*(candidatoC/totalEleitores))
    console.log("Numero total de votos do nulos:"+100*(votoNulo/totalEleitores))
    console.log("Numero total de votos brancos:"+100*(votoBranco/totalEleitores))

}