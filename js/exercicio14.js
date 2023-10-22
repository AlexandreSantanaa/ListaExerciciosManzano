function executarExercicio14() {
  alert(
    "a) Elaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e D). Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro valor,  e  o  resultado  da  soma (variável S) do segundo com o quarto valor. "
  );

  let A = parseInt(prompt("Digite o numero 1"));
  let B = parseInt(prompt("Digite o numero 2"));
  let C = parseInt(prompt("Digite o numero 3"));
  let D = parseInt(prompt("Digite o numero 4"));

  let P = A*C
  let soma = B+D

  alert("p="+P+"\NSOMA="+soma)

}
