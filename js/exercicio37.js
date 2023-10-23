function executarExercicio37(){
    alert("h) Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O programa deve apresentar os valores das duas temperaturas. A fórmula de conversão é 5 1609 += CF , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.")

    let temperaturaCelcius=10, temperaturaFahrenheit=0

    while(temperaturaCelcius<=100){
        temperaturaFahrenheit = (9*temperaturaCelcius+160)/5
        console.log(temperaturaFahrenheit)
        temperaturaCelcius+=10
    }
}