function executarExercicio51(){
    alert("j) Elaborar  um  programa  que  apresente  o  resultado  inteiro  da  divisão  de  dois  números  quaisquer. Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético DIV.  A  solução  deve  ser  alcançada  com  a  utilização  de  looping.  Ou  seja,  o  programa  deve apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.")

    let contador = 0
    let valor01 = parseInt(prompt("Digite um numero:"))
    let valor=valor01
    let valor02 = parseInt(prompt("Digite outro numero:"))

    do {
        valor01-=valor02
        contador++
    } while (valor01>=valor02);

    console.log(valor+"/"+valor02+"="+contador)
}