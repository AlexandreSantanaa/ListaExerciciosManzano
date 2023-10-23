function executarExercicio50(){
    alert("i) Elaborar  um  programa  que  efetue  a  leitura  de  valores  positivos  inteiros  até  que  um  valor  negativo seja  informado.  Ao  final  devem  ser  apresentados  o  maior  e  o  menor  valores  informados  pelo usuário. ")

    let valor=[], contador=0, numero

    do {
        valor[contador]=parseInt(prompt("Digite o valor " + (contador+1)))
        numero = valor[contador]
        contador++
    } while (numero>=0);

    let maior = Math.max(...valor)
    let menor = Math.min(...valor)

    alert("Maior: " + maior + "\n Menor: "+ menor)
}