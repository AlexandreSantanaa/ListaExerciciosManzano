function executarExercicio10(){
    alert("Elaborar  um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar.  O  programa  deve  solicitar  o  valor  da  cotação  do  dólar  e  também  a  quantidade  de  dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira.")

    let dolar = parseFloat(prompt("Digite a quantidade de dolares disponivel"))
    let cotacaoDolar = parseFloat(prompt("Digie o valor da cotação do dolar"))
    let real = dolar*cotacaoDolar

    alert("$"+dolar+"= R$"+real)
}