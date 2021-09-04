    let numeros = [9, 1, 2, 3, 9, 5, 10];
    let repeticoes = 0;
    let maiorNumero = 0;
    
    for (let index in numeros) {
        if (numeros[maiorNumero] < numeros[index]) {
            maiorNumero = index;
          }  
        }
    //console.log ('maior numero: '+numeros[maiorNumero]);
    
    for (let index in numeros) {
        if (numeros[maiorNumero] == numeros[index]) {
            repeticoes += 1;
          }
        } 
    //console.log ('repeticoes: '+repeticoes);
    console.log (repeticoes);
   
  