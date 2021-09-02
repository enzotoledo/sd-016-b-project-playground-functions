// Desafio 1
function compareTrue(param, param2) {
  if ((param === true) && (param2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(text) {
  let array = text.split(' '); // Usado comando split com o separador " ", retirado informação do site : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
  return array;
}

// Desafio 4
function concatName(arrayString) {
  let last = arrayString.length - 1;
  let space = ', ';
  return arrayString[last] + space + arrayString[0];
}

// Desafio 5
function footballPoints(win, ties) {
  let winPoints = win * 3;
  let tiesPoints = ties;
  return winPoints + tiesPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highNumber = Math.max.apply(null, arrayNumbers);// Retirado a informação para fazer a linha do código no site https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
  let count = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] === highNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1); // Math.abs usado para usar o valor absoluto do número para caso o numero for negativo retirado do site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs;
  let distanceCat2 = Math.abs(mouse - cat2);
  let answer = '';
  if (distanceCat1 < distanceCat2) {
    answer = 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    answer = 'cat2';
  } else {
    answer = 'os gatos trombam e o rato foge';
  }
  return answer;
}

// Desafio 8
function fizzBuzz(array) {
  let answer = [];
  for (let i in array) {
    if (array[i] % 15 === 0) {
      answer.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      answer.push('fizz');
    } else if (array[i] % 5 === 0) {
      answer.push('buzz');
    } else {
      answer.push('bug!');
    }
  }
  return answer;
}

// Desafio 9
function encode(string) {
  let arrayString = [];
  for (let i in string) {
    if (string[i] === 'a') {
      arrayString.push(1);
    } else if (string[i] === 'e') {
      arrayString.push(2);
    } else if (string[i] === 'i') {
      arrayString.push(3);
    } else if (string[i] === 'o') {
      arrayString.push(4);
    } else if (string[i] === 'u') {
      arrayString.push(5);
    } else {
      arrayString.push(string[i]);
    }
  }
  let answer = arrayString.join('');
  return answer;
}

function decode(string2) {
  let arrayString2 = [];
  for (let i in string2) {
    if (string2[i] === '1') {
      arrayString2.push('a');
    } else if (string2[i] === '2') {
      arrayString2.push('e');
    } else if (string2[i] === '3') {
      arrayString2.push('i');
    } else if (string2[i] === '4') {
      arrayString2.push('o');
    } else if (string2[i] === '5') {
      arrayString2.push('u');
    } else {
      arrayString2.push(string2[i]);
    }
  }
  let answer2 = arrayString2.join('');
  return answer2;
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
