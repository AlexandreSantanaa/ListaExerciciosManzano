function executarExercicio15(){
    alert("b) Ler  o  valor  correspondente  ao  salário  mensal  (variável  SM)  de  um  trabalhador  e  também  o  valor  do percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS).")

    let sm = parseFloat(prompt("Digite o valor so seu salario mensal"))
    let reajuste = parseFloat(prompt("Digite o valor do percentual de reajuste"))

    let ns = sm+(sm*(reajuste/100))

    alert("Novo salario")
}