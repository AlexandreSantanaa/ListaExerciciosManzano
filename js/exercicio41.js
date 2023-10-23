function executarExercicio41() {
  alert(
    "l) Elaborar  um  programa  que  efetue  a  leitura  de  valores  positivos  inteiros  até  que  um  valor  negativo seja  informado.  Ao  final  devem  ser  apresentados  o  maior  e  o  menor  valores  informados  pelo usuário."
  );

  let contador = 0;
  valor = [];

  valor[contador] = parseInt(prompt("Digite um numero:"));

  if (valor[contador] >= 0) {
    while (valor[contador] >= 0) {
      contador++;
      valor[contador] = parseInt(prompt("Digite um numero:"));
    }
    let maior = Math.max(...valor);
    let menor = Math.min(...valor);

    alert("maior:" + maior + "\nmenor:" + menor);
  } else {
    alert("maior:" + valor[contador]);
  }
}
