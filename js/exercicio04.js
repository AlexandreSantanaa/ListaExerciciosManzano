function executarExercicio04(){
    alert("Efetuar  o  cálculo  da  quantidade  de  litros  de  combustível  gasta    em  uma  viagem,  utilizando  um automóvel  que  faz  12  Km  por  litro.  Para  obter  o  cálculo,  o  usuário  deve  fornecer  o  tempo  gasto (TEMPO) e a velocidade  média (VELOCIDADE) durante  a viagem. Desta forma, será possível obter a distância  percorrida  com  a  fórmula  DISTANCIA    TEMPO  *  VELOCIDADE.  Possuindo  o  valor  da distância,  basta  calcular  a  quantidade  de  litros  de  combustível  utilizada  na  viagem  com  a  fórmula LITROS_USADOS  DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade média  (VELOCIDADE),  tempo  gasto  na  viagem  (TEMPO),  a  distancia  percorrida  (DISTANCIA)  e  a quantidade de litros (LITROS_USADOS) utilizada na viagem. ")

    let tempo=0, velocidadeMedia=0, distanciaPercorrida=0, LITROS_USADOS=0

    tempo = parseFloat(prompt("DIGITE QUANTAS HORAS DEMOROU A VIAGEM"))
    velocidadeMedia = parseFloat(prompt("DIGITE A VELOCIDADE MEDIA em km/h"))

    distanciaPercorrida = velocidadeMedia*tempo

    LITROS_USADOS = distanciaPercorrida/12

    alert("velocidade media:"+velocidadeMedia+"\ntempo:"+tempo+"\ndistancia percorrida:"+distanciaPercorrida +"\nlitros usados"+LITROS_USADOS)


}