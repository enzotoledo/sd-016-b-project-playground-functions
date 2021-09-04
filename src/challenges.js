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
  let triangleArea = (base * height) / 2;
  return triangleArea;
}


// Desafio 3
function splitSentence(string) {
  return string.split(" ")
} 

// Desafio 4
let Arr = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']

function concatName(stringArr) {
return stringArr[stringArr.length - 1] + ", " + stringArr[0]
} console.log(concatName(Arr))

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1)
  return points }
 console.log(footballPoints(1, 1))

// Desafio 6

function highestCount(numArray) {
  let frequency = 0
  let highestNum = Math.max.apply(null, numArray)

  for (let index of numArray) {
    if (index === highestNum) {
       frequency++;
    }
  }
  return frequency
}


// Desafio 7 abs
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

function fizzBuzz(numArray2) {
  let fizzArr = [] 
  for (let index = 0; index < numArray2.length; index += 1) {    
    if (numArray2[index] % 5 === 0 && numArray2[index] % 3 === 0 ) {
      fizzArr.push('fizzBuzz'); 
    } else if (numArray2[index] % 5 === 0) {
      fizzArr.push('buzz');         
    } else if (numArray2[index] % 3 === 0) {
      fizzArr.push('fizz'); 
    } else { 
      fizzArr.push('bug!');
      }
    }  return fizzArr
      }

// Desafio 9
function encode(string) {
  let encodedStr = string.replaceAll('a', '1').replaceAll('e', '2').replaceAll('i', '3').replaceAll('o', '4').replaceAll('u', '5');
  return encodedStr;
}

function decode(string) {
  let decodedStr = string.replaceAll('1', 'a').replaceAll('2', 'e').replaceAll('3', 'i').replaceAll('4', 'o').replaceAll('5', 'u');
  return decodedStr;
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
