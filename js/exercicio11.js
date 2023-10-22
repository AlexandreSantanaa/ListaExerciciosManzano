function executarExercicio11(){
    alert("Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana.")

    let real = parseFloat(prompt("Digite a quantidade de real disponivel"))
    let cotacaoDolar = parseFloat(prompt("Digie o valor da cotação do dolar"))
    let dolar = real/cotacaoDolar
    alert("$"+dolar+"= R$"+real)

}