// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
 
  if( a == true && b == true){
     return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let resultado = (base*height)/2
  return resultado
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(' ')
}

// Desafio 4
function concatName(frase) {
  // seu código aqui
  let ultimoIndice = 0;
  let ultimo = "";
  let primeiro = frase[0];

  for (let i=0; i <frase.length; i+=1){
    ultimoIndice = frase.length-1 
    ultimo = frase[ultimoIndice]
  }
  return ultimo +", "+primeiro
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let valueWins = 3;
  let valueTie = 1;
   
  let soma = (wins * valueWins) + (ties * valueTie)
  return soma
}

// Desafio 6
function highestCount(numbres) {
  // seu código aqui
  let maior = numbres[0]
  let resultado = 0;

  for (let i =1; i <= numbres.length; i+=1){

    if(numbres[i] > maior){
      maior = numbres[i]
    }
  }
  
  for (let i =0; i < numbres.length; i+=1){
    if (numbres[i] == maior){
      resultado +=1
    }
  }
  return resultado
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  
  if (Math.abs (cat1 - mouse) < Math.abs(cat2 - mouse)){
    return "cat1"
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1- mouse)){
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }

}
//atualizaçao feita a partir da duvida do colega Leandro Boralli, e ajuda dos colegas gabriel rodrigues leite e Guilerme Rosa.

// Desafio 8
function fizzBuzz(numbresFB) {
  // seu código aqui
  let resultado = [];

  for (let i =0; i < numbresFB.length; i+=1){

    if (numbresFB[i]% 3 ==0 && numbresFB[i]% 5==0){
      resultado.push("fizzBuzz");
    }else if (numbresFB[i]% 3 == 0){
      resultado.push("fizz");
    } else if (numbresFB[i]% 5 ==0){
      resultado.push("buzz");
    }else{
      resultado.push("bug!");
    }
  }
  return resultado
}

// Desafio 9
function encode(frase) {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
