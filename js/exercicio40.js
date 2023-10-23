function executarExercicio40(){
    alert("k) Elaborar  um  programa  que  possibilite  calcular  a  área  total  de  uma  residência  (sala,  cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do  cômodo  lido  e  também  uma  mensagem  solicitando  do  usuário  a  confirmação  de  continuar calculando  novos  cômodos.  Caso  o  usuário  responda  “NAO”,  o  programa  deve  apresentar  o  valor total acumulado da área residencial. ")

    let areaTotal=0, nome='',largura=0,comprimento=0, areaComodo=0, resposta=1

    while(resposta==1){
        areaComodo=0
        nome = prompt('Digite o nome do comodo:')
        largura = parseFloat(prompt("Digite a largura do comodo:"))
        comprimento = parseFloat(prompt("Digite a largura do comprimento:"))
        resposta = prompt("Quer adicionar mais algum comodo?:\n1-sim\n2-não")
        areaComodo+=largura*comprimento
        areaTotal+=areaComodo
    }
    alert("Area total:"+areaTotal)
}