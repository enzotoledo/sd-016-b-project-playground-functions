// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 == true && param2 == true){
    return true
} 
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  area = base * height / 2
  return area;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let arrayStr = str.split(' ')
  return arrayStr;
}
console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(strArr) {
  // seu código aqui
  let allStr = strArr[strArr.length - 1] + ', ' + strArr[0]
  
  return allStr
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  pontos = wins * 3 + ties

  return pontos
}
console.log(footballPoints(14, 8));

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
