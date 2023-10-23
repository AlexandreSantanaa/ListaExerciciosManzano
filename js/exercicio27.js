function executarExercicio27(){
    alert("i. Elaborar  um  programa  que  efetue  a  leitura  de  um  número  inteiro  e  apresentar  uma  mensagem informando se o número é par ou ímpar.")

    let valor = parseInt(prompt("Digite um numero"))

    let resposta=(valor%2==0)?alert(valor+" é par"):alert(valor+" é impar")
}