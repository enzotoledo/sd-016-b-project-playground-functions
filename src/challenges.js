// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true
  } else { 
    return false
  }
  
}

// Desafio 2
function calcArea(base, height) {
  return base * height 
}


// Desafio 3
function splitSentence(string) {
  return string.split(" ")
} 

// Desafio 4
let Arr = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']

function concatName(stringArr) {
return stringArr[stringArr.length - 1] + " " + stringArr[0]
} console.log(concatName(Arr))

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1)
  return points }
 console.log(footballPoints(1, 1))

// Desafio 6
function highestCount(numArray) {
  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 < mouse - cat2) {
    return "cat2"
  } else if (mouse - cat2 < mouse - cat1) {
    return "cat1"
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
let fizzArr = [] 

function fizzBuzz(numArray2) {
  for (let index = 0; index < numArray2.length; index++) {    
    if (numArray2[index] % 5 === 0 && numArray2[index] % 3 === 0 ) {
      fizzArr.push("fizzBuzz"); 
     } else if (numArray2[index] % 5 === 0) {
      fizzArr.push("buzz");         
      } else if (numArray2[index] % 3 === 0) {
        fizzArr.push("fizz"); 
      } else { 
        fizzArr.push("bug");
      }
    }  return fizzArr
      }
 console.log(fizzBuzz([2, 15, 7, 9, 45]))

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
