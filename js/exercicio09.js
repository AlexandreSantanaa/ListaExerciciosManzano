function executarExercicio09(){
    alert("Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo.")

    let A = parseInt(prompt("Digite o numero 1"));
    let B = parseInt(prompt("Digite o numero 2"));

    let c = (A-B)**2

    alert(c)
}