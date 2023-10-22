function executarExercicio03(){
    alert("Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: Altura")

    let volume = 0, raio = 0, altura=0

    raio = parseFloat(prompt("Digite o raio da lata"))
    altura = parseFloat(prompt("Digite a altura da lata"))

    volume = Math.PI*raio**2*altura

    alert("Volume da lata é:"+volume)
}