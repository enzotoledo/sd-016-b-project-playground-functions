// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let stringSeparada = string.split(' ');
  return stringSeparada;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let ultimo = array[array.length - 1];
  let primeiro = array[0];
  let concat = `${ultimo}, ${primeiro}`;

  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winPoints = wins * 3;
  let points = winPoints + ties;

  return points;
}

// Desafio 6

function highestCount(array) {
  // seu código aqui
  let maiorNumero = array[0];
  let repetMaiorNumero = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maiorNumero) {
      repetMaiorNumero += 1;
    }
  }
  return repetMaiorNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let resultado = [];

  for (let i of array) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (i % 3 === 0) {
      resultado.push('fizz');
    } else if (i % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  // Este exercício foi resolvido com a explicação provida no site: https://www.tutorialrepublic.com/faq/how-to-replace-character-inside-a-string-in-javascript.php, uma vez que a função .renameAll não está funcionando em nossa versão do node.
  let stringEncodada = string
    .replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
  return stringEncodada;
}
function decode(string2) {
  // seu código aqui
  let stringCorreta = string2
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return stringCorreta;
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
