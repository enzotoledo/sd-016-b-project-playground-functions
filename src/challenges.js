// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(value) {
  return value.split(' ');
}

// Desafio 4
function concatName(meuArray) {
  return `${meuArray[meuArray.length - 1]}, ${meuArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(numbers) {
  let max = numbers[0];
  let count = 0;
  for (const number of numbers) {
    if (max === number) {
      count += 1;
    } else if (max < number) {
      max = number;
      count = 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let retorno;

  if ((cat1 === 0) || (cat2 === 0)) {
    retorno = 'os gatos trombam e o rato foge';
  } else if (cat1 < cat2) {
    retorno = 'cat1';
  } else if (cat1 > cat2) {
    retorno = 'cat2';
  }

  return retorno;
}

// Desafio 8
function fizzBuzz(numbers) {
  let meuArray = [];
  for (const number of numbers) {
    if ((number % 3 === 0) && (number % 5 === 0)) {
      meuArray.push('fizzBuzz');
    } else if (number % 3 === 0) {
      meuArray.push('fizz');
    } else if (number % 5 === 0) {
      meuArray.push('buzz');
    } else {
      meuArray.push('bug!');
    }
  }
  return meuArray;
}

// Desafio 9
function encode(crypt) {
  let vogal = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let encrypt = crypt.split('');

  for (let key in encrypt) {
    if (vogal[encrypt[key]]) {
      encrypt[key] = vogal[encrypt[key]];
    }
  }

  return encrypt.join('');
}

function decode(crypt) {
  let vogal = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let encrypt = crypt.split('');

  for (let index in encrypt) {
    if (vogal[encrypt[index]]) {
      encrypt[index] = vogal[encrypt[index]];
    }
  }

  return encrypt.join('');
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
