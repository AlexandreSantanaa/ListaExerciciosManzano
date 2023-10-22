function executarExercicio06(){
    alert("Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados")

    let a = prompt("Digite algo:")
    let b = prompt("Digite outro algo:")
    let c = b
    b=a
    a=c

    alert("valor01:"+a+"\nvalor02:"+b)

}