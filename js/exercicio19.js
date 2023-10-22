function executarExercicio19(){
    alert("c. Ler  quatro  valores  referentes  a  quatro  notas  escolares  de  um  aluno  e  imprimir  uma  mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não oi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o valor da média do aluno para qualquer condição.")

    let nota01 = parseFloat(prompt("Digite a nota 01"))
    let nota02 = parseFloat(prompt("Digite a nota 02"))
    let nota03 = parseFloat(prompt("Digite a nota 03"))
    let nota04 = parseFloat(prompt("Digite a nota 04"))

    let media = (nota01+nota02+nota03+nota04)/4

    let resposta = (media>=5)?"aprovado com media " + media:"reprovado com media " + media
    
    alert(resposta)
}