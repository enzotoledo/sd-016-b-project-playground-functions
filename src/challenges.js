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
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins,ties) {
  let points;
  points = wins * 3 + ties;
  return points; 
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
