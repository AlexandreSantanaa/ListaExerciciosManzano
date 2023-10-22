function executarExercicio07() {
  alert(
    "Ler  quatro  números  inteiros  e  apresentar  o  resultado  da  adição  e  multiplicação,  baseando-se  na utilização  do  conceito  da  propriedade  distributiva.  Ou  seja,  se  forem  lidas  as  variáveis  A,  B,  C,  e  D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C  com  D.  Perceba  que  será  necessário  efetuar  seis  operações  de  adição  e  seis  operações  de multiplicação e apresentar doze resultados de saída."
  );

  let A = parseInt(prompt("Digite o numero 1"));
  let B = parseInt(prompt("Digite o numero 2"));
  let C = parseInt(prompt("Digite o numero 3"));
  let D = parseInt(prompt("Digite o numero 4"));

  console.log("A+B=", A + B);
  console.log("A+C=", A + C);
  console.log("A+D=", A + D);
  console.log("B+C=", B + C);
  console.log("C+D=", C + D);
  console.log("B+D=", B + D);

  console.log("A*B=", A * B);
  console.log("A*C=", A * C);
  console.log("A*D=", A * D);
  console.log("B*C=", B * C);
  console.log("C*D=", C * D);
  console.log("B*D=", B * D);
}
