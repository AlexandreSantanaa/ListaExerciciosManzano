function executarExercicio24(){
    alert("f. Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.")

    let a=[]
    a[0] = parseInt(prompt("Digite o numero 1"));
    a[1] = parseInt(prompt("Digite o numero 2"));
    a[2] = parseInt(prompt("Digite o numero 3"));


    a.sort(function(a,b){
        return a-b
    })

    console.log(a)
}