// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(itensConcatenados) {
  return `${itensConcatenados.pop()}, ${itensConcatenados.shift()}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(novaArray) {
  // seu código aqui
  let maiorNumero = novaArray[0];
  let repeticao = 0;
  for (let i = 0; i < novaArray.length; i += 1) {
    if (novaArray[i] > maiorNumero) {
      maiorNumero = novaArray[i];
      repeticao = 1;
    } else if (novaArray[i] === maiorNumero) {
      repeticao += 1;
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);

  if (cat1 > cat2) {
    return 'cat2';
  }
  if (cat2 > cat1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(divArray) {
  // seu código aqui
  let strResult = [];

  divArray.forEach(function (i) {
    if (i % 3 === 0 && i % 5 === 0) {
      strResult.push('fizzBuzz');
    } else if (i % 3 === 0) {
      strResult.push('fizz');
    } else if (i % 5 === 0) {
      strResult.push('buzz');
    } else {
      strResult.push('bug!');
    }
  });

  return strResult;
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
