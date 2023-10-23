function executarExercicio46(){
    alert("e) Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido.")

    let fatorial=1, contador=0, soma=0, valor=0

    do{
        valor = parseInt(prompt("Digite o valor " + (contador+1)))
        fatorial=1
        do {
            fatorial *= valor
            valor--
        }while(valor>=1);
        contador++
        console.log("fatorial:"+fatorial)
        soma+=fatorial
    }while(contador<=15)

    console.log("soma:"+soma)
}