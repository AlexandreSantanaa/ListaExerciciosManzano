function executarExercicio36(){
    alert("g) Escreva  um  programa  que  apresente  a  série  de  Fibonacci  até  o  décimo  quinto  termo.  A  série  de Fibonacci  é  formada  pela  seqüência:  1,  1,  2,  3,  5,  8,  13,  21,  34,  ...,  etc.  Esta  série  se  caracteriza pela  soma  de  um  termo  atual  com  o  seu  anterior  subseqüente,  para  que  seja  formado  o  próximo valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc.")

    let termo01=1,termo02=1, termoN=0, contador=1

    while(contador<=15){
        termoN=termo01
        console.log(termo01)
        termo01=termo02
        termo02 =termo01+termoN

        contador++
    }
}