function executarExercicio47(){
  alert("f) Elaborar  um  programa  que  efetue  a  leitura  sucessiva  de  valores  numéricos  e  apresente  no  final  o total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras dos  valores  enquanto  o  usuário  estiver  fornecendo  valores  positivos.  Ou  seja,  o  programa  deve parar  quando  o  usuário  fornecer  um  valor  negativo.  Não  se  esqueça  que  o  usuário  pode  entrar como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da média")

  let valor = 0, soma=0,media=0, contador=0

  do {
      valor=parseInt(prompt("Digite o numero " + (contador+1)))
      soma+=valor
      contador++
  } while (valor>=0);

  media=soma/contador

  alert("SOMA:"+soma+"\nMEDIA:"+media+"\nTOTAL VALORES:"+contador)    
}