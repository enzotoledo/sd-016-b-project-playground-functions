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
function concatName() {
  // seu código aqui
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
  
  if ((cat1*mouse) < (cat2*mouse)){
    return "cat1"
  } else if ((cat2*mouse) < (cat1*mouse)){
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }

}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
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
