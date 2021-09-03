// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
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
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio// dica externa de usar o filter
function highestCount(arrayOfNumbers) {
  return arrayOfNumbers.filter(function (x) { return x === Math.max(...arrayOfNumbers); }).length;
}

// Desafio 7 (Math.abs recomendado pelo pessoal no slack <3)
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}
// Desafio 8 usei o exemplo do arr.forEach do Gabriel Sivestre da turma 16 tribo b
function fizzBuzz(arr) {
  const starArray = [];
  arr.forEach((n) => {
    if (n % 3 === 0 && n % 5 === 0) {
      starArray.push('fizzBuzz');
    } else if (n % 3 === 0) {
      starArray.push('fizz');
    } else if (n % 5 === 0) {
      starArray.push('buzz');
    } else {
      starArray.push('bug!');
    }
  });
  return starArray;
}

// Desafio 9 feito com base no https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
function encode(arg) {
  let code = ['a', 'e', 'i', 'o', 'u', 10];
  for (let i = 1; i <= code.length; i += 1) {
    arg = arg.replace(RegExp(code[i - 1], 'g'), i);
  }
  return arg;
}
function decode(arg) {
  let code = ['a', 'e', 'i', 'o', 'u', 10];
  for (let i = 1; i <= code.length; i += 1) {
    arg = arg.replace(RegExp(i.toString(), 'g'), code[i - 1]);
  }
  return arg;
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
