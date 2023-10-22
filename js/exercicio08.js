function executarExercicio08(){
    alert("Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula VOLUME  COMPRIMENTO * LARGURA * ALTURA.")

    let comprimento = parseFloat(prompt("Digite o comprimento da caixa"))
    let largura = parseFloat(prompt("Digite o largura da caixa"))
    let altura = parseFloat(prompt("Digite o ALTURA da caixa"))

    let volume=comprimento*altura*largura

    alert("Volume da caixa:"+volume)
}