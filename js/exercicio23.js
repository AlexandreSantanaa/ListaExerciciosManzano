function executarExercicio23(){
    alert("e. Efetuar  a  leitura  de  três  valores  (variáveis  A,  B  e  C)  e  efetuar  o  cálculo  da  equação  completa  de segundo  grau,  apresentando  as  duas  raízes,  se  para  os  valores  informados  for  possível  efetuar  o referido cálculo. Lembre-se de que a variável A deve ser diferente de zero.")
    
    let a = parseFloat(prompt("Digite o valor de A:"))
    let b = parseFloat(prompt("Digite o valor de B:"))
    let c = parseFloat(prompt("Digite o valor de C:"))

    while(a==0){
        a = parseFloat(prompt("Digite o valor de A, maior que zero:"))
    }

    let x1=0, x2=0
    let delta = b**2-4*a*c

    let resposta = (delta==0)?
    alert("Delta:"+delta+"\nraiz:"+ Math.sqrt(delta)):
    (delta<0)?
    alert("Não possui raizes reais"):
    ((x1=(-b-Math.sqrt(delta))/2*a), 
    (x2=(-b+Math.sqrt(delta))/2*a), 
    alert("Delta:"+delta+"\nx1:"+x1+"\nx2:"+x2   )) 
    
}