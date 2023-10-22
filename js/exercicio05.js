function executarExercicio05(){
    alert("Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula  PRESTACAO  VALOR + (VALOR * TAXA/100) * TEMPO). ")

    let prestacao=0, valor=0, taxa=0, tempo=0

    valor = parseFloat(prompt("Digite o valor da prestação"))
    taxa = parseFloat(prompt("Digite o valor da taxa"))
    tempo = parseFloat(prompt("Digite o tempo em atraso"))

    prestacao = valor +(+taxa/100)*tempo

    alert("Prestação:"+prestacao)
}