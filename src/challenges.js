// Desafio 1
function compareTrue(comp1, comp2) {
  if (comp1 === true && comp2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2)
}

// Desafio 3
function splitSentence(arr) {
  return arr.split(" ")
}

// Desafio 4
function concatName(string) {
  return string[string.length - 1] + ", " + string[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties
}

// Desafio 6
function highestCount(param1) {
  let maiorNumero = param1[0];
  let qntsRepete = 0;

  for (let i = 1; i < param1.length; i += 1) {
    if (param1[i] > maiorNumero) {
      maiorNumero = param1[i]
    }
  }
  for (let index = 0; index < param1.length; index += 1) {
    if (param1[index] === maiorNumero) {
      qntsRepete += 1;
    }
  }
  return qntsRepete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let param1 = 'cat1';
  let param2 = 'cat2';
  let param3 = 'os gatos trombam e o rato foge';

  if (Math.abs(cat1 - mouse) < (cat2 - mouse)) {
    return param1;
  } else if (Math.abs(cat2 - mouse) < (cat1 - mouse)) {
    return param2;
  } else {
    return param3;
  }
}
console.log(catAndMouse(0, 4, 3));

// Desafio 8
function fizzBuzz(param1) {
  let div3 = 'fizz';
  let div5 = 'buzz';
  let div35 = 'fizzBuzz';
  let bug = 'bug!';

  for (let index = 0; index < param1.length; index += 1) {
    if (param1[index] % 3 === 0 && param1[index] % 5 === 0) {
      param1[index] = div35;
    } else if (param1[index] % 3 === 0) {
      param1[index] = div3;
    } else if (param1[index] % 5 === 0) {
      param1[index] = div5;
    } else {
      param1[index] = bug;
    }
  }
  return param1
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

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
