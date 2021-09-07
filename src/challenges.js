// Desafio 1
function compareTrue(value1, value2) {
  let compare = false;
  if ((value1 === true) && (value2 === true)) {
    compare = true;
  }
  return compare;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(wordString) {
  let result = wordString.split(' ');
  return result;
}

// Desafio 4
function concatName(anyArray) {
  let lastArray = anyArray[anyArray.length - 1];
  let firstArray = anyArray[0];
  return lastArray + ', ' + firstArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoins = wins * 3;
  return winPoins + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let result = [];
  let largerNumber = Math.max(...arrayNumbers);
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === largerNumber) {
      result.push(largerNumber);
    }
  }
  return result.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = Math.abs(mouse - cat1);
  let mouseCat2 = Math.abs(mouse - cat2);
  let result;
  if (mouseCat1 > mouseCat2) {
    result = 'cat2';
  } else if (mouseCat1 < mouseCat2) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(divisible) {
  let fBuzz = [];
  for (let index = 0; index < divisible.length; index += 1) {
    let divisibleThree = divisible[index] % 3;
    let divisibleFive = divisible[index] % 5;
    if (divisibleThree === 0 && divisibleFive === 0) {
      fBuzz.push('fizzBuzz');
    } else if (divisibleFive === 0) {
      fBuzz.push('buzz');
    } else if (divisibleThree === 0) {
      fBuzz.push('fizz');
    } else {
      fBuzz.push('bug!');
    }
  }
  return fBuzz;
}

// Desafio 9
function encode(string) {
  let separeteVowel = string.split('');
  for (let index = 0; index < string.length; index += 1) {
    if (separeteVowel[index] === 'a') {
      separeteVowel[index] = '1';
    } else if (separeteVowel[index] === 'e') {
      separeteVowel[index] = '2';
    } else if (separeteVowel[index] === 'i') {
      separeteVowel[index] = '3';
    } else if (separeteVowel[index] === 'o') {
      separeteVowel[index] = '4';
    } else if (separeteVowel[index] === 'u') {
      separeteVowel[index] = '5';
    }
  }
  return separeteVowel.join('');
}

function decode(string) {
  let separeteVowel = string.split('');
  for (let index = 0; index < string.length; index += 1) {
    if (separeteVowel[index] === '1') {
      separeteVowel[index] = 'a';
    } else if (separeteVowel[index] === '2') {
      separeteVowel[index] = 'e';
    } else if (separeteVowel[index] === '3') {
      separeteVowel[index] = 'i';
    } else if (separeteVowel[index] === '4') {
      separeteVowel[index] = 'o';
    } else if (separeteVowel[index] === '5') {
      separeteVowel[index] = 'u';
    }
  }
  return separeteVowel.join('');
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
