// Desafio 1
function compareTrue(param1, param2) {
  if ((param1 === true) && (param2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return (arrayString[arrayString.length - 1] + ', ' + arrayString[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(numbersArray) {
  let max = -Infinity;
  let repeat = 0;
  for (let index of numbersArray) {
    if (index > max) {
      max = index;
      repeat = 1;
    } else if (index === max) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numberArray) {
  let fizbuz = [];
  for (let index of numberArray){
    if ((index % 3 === 0) && (index % 5 === 0)) {
      fizbuz.push('fizzBuzz');
    } else if (index % 3 === 0) {
      fizbuz.push('fizz');
    } else if (index % 5 === 0) {
      fizbuz.push('buzz');
    } else {
      fizbuz.push('bug!');
    }
  }
    return fizbuz;
}

// Desafio 9
function encode(string) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  let result = string.split('');
 for (let index = 0; index < result.length; index += 1){
   for (let key in code){
     if( result[index] == key){
       result[index] = code[key];
     }
   }
 }
  return result.join('');
}

function decode(string) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  let result = string.split('');
 for (let index = 0; index < result.length; index += 1){
   for (let key in code){
     if( result[index] == code[key]){
       result[index] = key;
     }
   }
 }
  return result.join('');
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
