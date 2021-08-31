// Desafio 1
function compareTrue(a,b) {
  if ((a == true) && (b == true)) {
    return true;
  }else {
    return false;
  }

}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(str) {
  let str01 = str.length-1
  let resultStrings = str[str01]+', '+str[0];
  return resultStrings;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;

}

// Desafio 6
function highestCount(n) {
  let numBig = Math.max(...n);
  let qtd = 0;
  for(let i = 0; i < n.length; i++){
    if(n[i] === numBig){
      qtd = qtd + 1;
    }
  }
  return qtd;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrayNub) {
  let divTres;
  let divCinco;
  let result = [];
  
  for(let index = 0 ; index < arrayNub.length; index++){
    
    divTres = arrayNub[index] % 3;
    divCinco = arrayNub[index] % 5;
  
    if(divTres === 0 && divCinco === 0 ){
      result.push('fizzBuzz');
    }else if(divTres === 0){
      result.push('fizz');
    }else if(divCinco === 0){
      result.push('buzz');
    }else{
      result.push('bug!');
    }
    
  }
  arrayNub = result;
  return arrayNub;
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
