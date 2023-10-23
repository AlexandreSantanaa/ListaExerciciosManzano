function executarExercicio30(){
    alert("l. Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com saída  uma  das  seguintes  mensagens:  Ilmo  Sr.,  se  o  sexo  informado  como  masculino,  ou  a  mensagem Ilma Sra., para o sexo informado como  feminino. Apresente também junto da mensagem de saudação o nome previamente informado.")

    let nome = prompt("Digite seu nome:")
    let sexo = prompt("Digite a letra para seu sexo correspondente:\nF-feminino\nM-masculino")

    let resposta = (sexo.toLowerCase()=="f")?alert("Senhora " + nome):alert("Senhor " + nome)
}