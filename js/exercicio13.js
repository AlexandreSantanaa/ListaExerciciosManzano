function executarExercicio13(){
    alert("m) Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.")

    let A = parseInt(prompt("Digite o numero 1"));
    let B = parseInt(prompt("Digite o numero 2"));
    let C = parseInt(prompt("Digite o numero 3"));

    let resultado = (A+B+C)**2
    alert(resultado)
}