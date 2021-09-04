// Desafio 1
function compareTrue(param1, param2) {
  if ((param1 === true) && (param2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(string) {
  let names = [string[0], string.reverse()[0]];
  return names.reverse().join(', ');
}

// Desafio 5
function footballPoints(wins, tie) {
  return (wins * 3) + tie;
}

// Descubrir o maior número.
function biggerNumber(param) {
  let bigger = param[0];
  for (let number of param) {
    if (number > bigger) {
      bigger = number;
    }
  }
  return bigger;
}

// Descubrir quantas vezes o número que se repete.
function repeatNumber(bigger, param) {
  let cont = 0;
  for (let numbers of param) {
    if (bigger === numbers) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 6
function highestCount(param) {
  return repeatNumber(biggerNumber(param), param);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;
  let result = '';
  if (Math.abs(distanceCat1) < Math.abs(distanceCat2)) {
    result = 'cat1';
  } else if (Math.abs(distanceCat2) < Math.abs(distanceCat1)) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
// Foi resolvido com a ajuda do Gabriel Rodrigues Leite, com a thread no slack.

// Desafio 8
function fizzBuzz(param) {
  let words = [];
  for (let number of param) {
    if ((number % 3 === 0) && (number % 5 === 0)) {
      words.push('fizzBuzz');
    } else if (number % 3 === 0) {
      words.push('fizz');
    } else if (number % 5 === 0) {
      words.push('buzz');
    } else {
      words.push('bug!');
    }
  }
  return words;
}

// Desafio 9
function encode(param) {
  let result = param;
  result = result.replace(/a/gi, 1);
  result = result.replace(/e/gi, 2);
  result = result.replace(/i/gi, 3);
  result = result.replace(/o/gi, 4);
  result = result.replace(/u/gi, 5);
  return result;
}
function decode(param) {
  let comingBackNormal = param;
  comingBackNormal = comingBackNormal.replace(/1/gi, 'a');
  comingBackNormal = comingBackNormal.replace(/2/gi, 'e');
  comingBackNormal = comingBackNormal.replace(/3/gi, 'i');
  comingBackNormal = comingBackNormal.replace(/4/gi, 'o');
  comingBackNormal = comingBackNormal.replace(/5/gi, 'u');
  return comingBackNormal;
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
