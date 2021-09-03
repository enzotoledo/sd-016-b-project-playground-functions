// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(manga) {
  return manga.split(' ');
}

// Desafio 4
function concatName(nameConcat) {
  return `${nameConcat[nameConcat.length - 1]} + ',' + ${nameConcat[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(highestNumber) {
  let resultado = 0;
  let highest;
  for (let number of highestNumber) {
    if (number === highest) {
      resultado += 1;
    } else if (!highest || number > highest) {
      highest = number;
      resultado = 1;
    }
  }
  return resultado;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else {
    return 'sem resultado';
  }
}

// Desafio 8
function check(buzzFizz) {
  if (buzzFizz % 3 === 0 && buzzFizz % 5 === 0) {
    return 'fizzBuzz';
  }
  if (buzzFizz % 5 === 0) {
    return 'buzz';
  }
  if (buzzFizz % 3 === 0) {
    return 'fizz';
  }
  return 'bug!';
}
function fizzBuzz(fuzzBizz) {
  let result = [];
  for (let buzzFizz of fuzzBizz) {
    result.push(check(buzzFizz));
  }
  return result;
}

// Desafio 9
function encode(codificando) {
  let codifica = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let codificado = gocode.replace(/[aeiou]/g, (letras) => gocode[letras]);
  return codificado;
}
function decode(decodificando) {
  let decodifica = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let decodificado = decodifica.replace(
    /[12345]/g,
    (letras) => decodifica[letras]
  );
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
