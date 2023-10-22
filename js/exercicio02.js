function executarExercicio02(){
    alert("er  uma  temperatura  em  graus  Fahrenheit  e  apresentá-la  convertida  em  graus  Celsius.  A  fórmula  de conversão é C  (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.")

    let temperaturaCelcius = 0, temperaturaFahrenheit=0

    temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em graus celcius:"))

    temperaturaCelcius = (temperaturaFahrenheit-32)*(5/9)

    alert(" A temperatura em celcius é:"+temperaturaCelcius+"°C") 
}