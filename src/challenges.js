// Desafio 1
function compareTrue(param1, param2) {
  if (param1 == true && param2 == true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2
  return area
}

// Vi a explicação de como utilizar o .split em: https://www.w3schools.com/jsref/jsref_split.asp
// Desafio 3
function splitSentence(phrase) {
  arrPhrase = phrase.split(" ");
  return arrPhrase
}

// Desafio 4
function concatName(names) {
  for (let index = 0; index < names.length; index++) {
    let last = names.pop()
    let fristAndLast = last + ", " + names[0]
    return fristAndLast
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = 0
  if (wins != 0) {
    score += wins * 3
    if (ties != 0) {
      score += ties
    }
  }else if (ties != 0) {
    score += ties
  }
  return score
}

// Desafio 6
function highestCount(string) {
  let biggestNumber = [];
  string.sort()
  if (string[0] >= 0) {
    string.reverse()
  }
  biggestNumber[0] = string[0] - 1
  for (let key in string) {
    let value = string[key]
      if (value > biggestNumber) {
        biggestNumber[0] = value
      } else if (value == biggestNumber[0]) {
        biggestNumber.push(value)
      } 
    }let numb = biggestNumber.length
return numb  
}

console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))

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
