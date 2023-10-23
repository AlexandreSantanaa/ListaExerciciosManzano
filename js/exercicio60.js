function executarExercicio60(){
    alert("j) Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O programa deve apresentar os valores das duas temperaturas. A fórmula de conversão é 51609 += CF , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.")

    let temperaturaFahrenheit=0

    for(let i=10; i<=100; i+=10){
        temperaturaFahrenheit = ((9*i+160)/5)
        console.log(i +"°C = " + temperaturaFahrenheit +"°F")
    }
}