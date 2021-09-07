// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = base * height / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let arrayStr = str.split(' ');
  return arrayStr;
}

// Desafio 4
function concatName(strArr) {
  // seu código aqui
  let allStr = `${strArr[strArr.length - 1]}, ${strArr[0]}`;
  return allStr;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  // ~~ Créditos ao Gabriel Rodrigues por ajudar o entendimento do requisito. ~~
  numeroRepetido = 0;
  maiorNumero = numeros[0];
  for (let index = 0; index < numeros.length; index += 1) {
    if (maiorNumero < numeros[index]) {
      maiorNumero = numeros[index];
    }
  }

  // Pega as repetições do maior número
  for (let index = 0; index < numeros.length; index += 1) {
    if (maiorNumero === numeros[index]) {
      numeroRepetido += 1;
    }
  }
  return numeroRepetido;
}
console.log(highestCount([1, 2, 3, 3, 3]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  if (Math.abs(cat1 - mouse) < (Math.abs(cat2 - mouse))) {
    return 'cat1';
  }
  if (Math.abs(cat1 - mouse) > (Math.abs(cat2 - mouse))) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(1, 1, 1));

// Desafio 8
function fizzBuzz(numbersArr) {
  // seu código aqui
  let result = [];
  for (let index = 0; index < numbersArr.length; index += 1) {
    if (numbersArr[index] % 3 === 0 && numbersArr[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (numbersArr[index] % 5 === 0) {
      result.push('buzz');
    } else if (numbersArr[index] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(str) {
  // Seu código aqui
  let parametros = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  strSplit = str.split('');

  for (let index = 0; index < strSplit.length; index += 1) {
    for (let key in parametros) {
      if (strSplit[index] === key) {
        strSplit[index] = parametros[key];
      }
    }
  }
  result = strSplit.join('');
  return result;
}
console.log(encode('hi there'));

function decode(str) {
  // seu código aqui
  let parametros = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  strSplit = str.split('');

  for (let index = 0; index < strSplit.length; index += 1) {
    for (let key in parametros) {
      if (strSplit[index] === key) {
        strSplit[index] = parametros[key];
      }
    }
  }
  result = strSplit.join('');
  return result;
}
console.log(decode('h3 th2r2'));

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
