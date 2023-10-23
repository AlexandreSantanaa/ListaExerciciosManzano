function executarExercicio35(){
    alert("e) Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado  que  qualquer  número  elevado  a  zero  é  1,  e  elevado  a  1  é  ele  próprio.  Observe  que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).")

    let base = 3, expoente=0, resultado=1

    while(expoente<=15){
        console.log(resultado)
        resultado *= base
        expoente++
    }
}