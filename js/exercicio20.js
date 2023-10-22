function executarExercicio20(){
    alert("d. Ler  quatro  valores  referentes  a  quatro  notas  escolares  de  um  aluno  e  imprimir  uma  mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média. Se  a  nova  média  for  maior  ou  igual  a  5,  apresentar  uma  mensagem  dizendo  que  o  aluno  foi aprovado  em  exame.  Se  o  aluno  não  foi  aprovado,  indicar  uma  mensagem  informando  esta condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição.")

    let nota01 = parseFloat(prompt("Digite a nota 01"))
    let nota02 = parseFloat(prompt("Digite a nota 02"))
    let nota03 = parseFloat(prompt("Digite a nota 03"))
    let nota04 = parseFloat(prompt("Digite a nota 04"))

    let media = (nota01+nota02+nota03+nota04)/4

    if(media>=7){
       alert("aprovado com media " + media)
    }else{
        alert("Fazer exame")
        media += parseFloat(prompt("Digite a nota do exame"))
        media/=2
        if(media>=5){
           alert("aprovado no exame com media " + media)
        }else{
            alert("Reprovado com media "+media)
        }
    }

}