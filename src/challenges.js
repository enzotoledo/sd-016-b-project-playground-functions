// Desafio 1
function compareTrue(value1,value2) {
  if(value1 === true && value2 === true){
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base,height) {
  let triangulo = (base * height)/2
  return triangulo
}

// Desafio 3
function splitSentence(string) {
  let newPhrase = string.split(" ");
  for(let index = 0; index < 0; index += 1){
  newPhrase = newPhrase[index] + ",";
  }
  return newPhrase;
}

// Desafio 4
function concatName(name) {
  var result = name[name.length -1] + ", " + name[0];
  return result
}

// Desafio 5
function footballPoints(wins,ties) {
  let points;
  points = wins * 3 + ties;
  return points; 
}

// Desafio 6
function highestCount(listOfNumber) {
  let high = -99999999;
  let count = 0;

  for(let index = 0; index < listOfNumber.length; index += 1){
    if(listOfNumber[index] > high){
      high = listOfNumber[index]
      count = 0;
      count += 1;
      }else if(listOfNumber[index] == high){
        count += 1
      }
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
function encode(phrase) {
  var resultado = phrase.replace(/a/gi, 1);
  var resultado1 = resultado.replace(/e/gi,2);
  var resultado2 = resultado1.replace(/i/gi, 3);
  var resultado3 = resultado2.replace(/o/gi,4);
  var resultadoFinal = resultado3.replace(/u/gi, 5);

  return resultadoFinal
}

function decode(phrase) {
  var resultado = phrase.replace(/1/gi, 'a');
  var resultado1 = resultado.replace(/2/g,'e');
  var resultado2 = resultado1.replace(/3/g, 'i');
  var resultado3 = resultado2.replace(/4/g,'o');
  var resultadoFinal = resultado3.replace(/5/g, 'u');

  return resultadoFinal
}

//desafio 10

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
