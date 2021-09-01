// Desafio 1
function compareTrue(a, b) {
  if ((a === true) && (b === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  let result = 0;
  result = ((base * heigth) / 2);
  return result;
}

// Desafio 3
function splitSentence(string) {
  let split = [];
  split = string.split(' ');
  return split;
}

// Desafio 4
function concatName(string) {
  let firstAndLast = [];
  firstAndLast += (string[string.length - 1]) + ',';
  firstAndLast += ' ' + (string[0]);
  return firstAndLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties * 1;
  return winPoints + tiePoints;
}

// Desafio 6
function highestCount(array) {
  let guardaMaior = -Infinity;
  let quantVezes = 0;

  for (index = 0; index < array.length; index++) {
    if (array[index] > guardaMaior) {
      guardaMaior = array[index];
    }
  }

  for (index = 0; index < array.length; index++) {
    if (guardaMaior == array[index]) {
      quantVezes += 1;
    }
  }
  return quantVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = 0;
  let distanceCat2 = 0;

  distanceCat1 = Math.abs(cat1 - mouse);
  distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } else if (distanceCat1 == distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let concat = [];
  for (index = 0; index < array.length; index++) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0)
      concat.push('fizzBuzz')
    else if (array[index] % 3 === 0)
      concat.push('fizz')
    else if (array[index] % 5 === 0)
      concat.push('buzz')
    else concat.push('bug!')
  }
  return concat;
}

// Desafio 9
function encode(string) {
  var trocado = [];
  trocado = string.split('');

  for (index = 0; index < string.length; index++) {
    if (trocado[index] == 'a') {
      trocado[index] = "1";
    } else if (trocado[index] == 'e') {
      trocado[index] = "2";
    } else if (trocado[index] == 'i') {
      trocado[index] = "3";
    } else if (trocado[index] == 'o') {
      trocado[index] = "4";
    } else if (trocado[index] == 'u') {
      trocado[index] = "5";
    }
  }

  trocado = trocado.join('');

  return trocado;
}

function decode(string) {
  var decodificado = [];
  decodificado = string.split('');

  for (index = 0; index < string.length; index++) {
    if (decodificado[index] === '1') {
      decodificado[index] = "a";
    } else if (decodificado[index] === '2') {
      decodificado[index] = "e";
    } else if (decodificado[index] === '3') {
      decodificado[index] = "i";
    } else if (decodificado[index] === '4') {
      decodificado[index] = "o";
    } else if (decodificado[index] === '5') {
      decodificado[index] = "u";
    }
  }

  decodificado = decodificado.join('');

  return decodificado;
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