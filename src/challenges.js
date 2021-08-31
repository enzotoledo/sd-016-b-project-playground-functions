// Desafio 1
function compareTrue(value1,value2) {
  if((value1 === true)&&(value2 === true)){
   return true;
  }else{
   return false;
  } 
}

// Desafio 2
function calcArea(base,height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" "); 
}

// Desafio 4
function concatName(strings) {
  let vetor = [];
  for(let i = 0 ; i < strings.length ; i++){
    if(i == 0){
      vetor.push(strings[0]);
    }else if(i == strings.length-1){
      vetor.push(strings[strings.length-1]);
    }
  }

  return vetor[1] + ", " + vetor[0];
  
}

// Desafio 5
function footballPoints(wins,ties) {
  let point = wins*3;
  point = point + ties;
  return point;
}

// Desafio 6
function highestCount(numeros) {
  let maior = 0;
  let count = 0;

  for(let i = 0 ; i < numeros.length ; i++){
    if(numeros[i] > maior){
      maior = numeros[i];
    }
  }

  for(let i = 0 ; i < numeros.length ; i++){
    if(numeros[i] === maior){
      count++;
    }
  }
  if(count == 0){
    count = 1;
  }  
  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
