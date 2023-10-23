function executarExercicio25(){
    alert("g. Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3. ")

    let valor=[], resposta =[]

   for(let i = 0; i<4; i++){
        valor[i]=parseInt(prompt("Digite o numero " + (i+1)))
   }

   for(let i=0; i<4; i++){
    resposta.push((valor[i]%2==0||valor[i]%3==0)?valor[i]:null) 
   }

   console.log(resposta)
}