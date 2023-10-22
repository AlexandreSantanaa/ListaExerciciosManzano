function executarExercicio01(){
    alert("Ler  uma  temperatura  em  graus  Celsius  e  apresentá-la  convertida  em  graus  Fahrenheit.  A  fórmula  de conversão é F  (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.")

    let temperaturaCelcius = 0, temperaturaFahrenheit=0

    temperaturaCelcius = parseFloat(prompt("Digite a temperatura em graus celcius:"))

    temperaturaFahrenheit = (temperaturaCelcius*9+160)/5

    alert(" A temperatura em Fahrenheit é:"+temperaturaFahrenheit+"°F")
}