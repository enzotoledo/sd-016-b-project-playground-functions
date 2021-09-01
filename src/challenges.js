// Desafio 1
function compareTrue(a, b) {
  return (a && b);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
/* Funcionalidade do split pega na seguinte url:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */
function splitSentence(stringToSplit) {
  return stringToSplit.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return (`${arrayString[arrayString.length - 1]}, ${arrayString[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let max = -Infinity;
  let count = 0;
  for (let i of arrayNumbers) {
    if (i > max) {
      max = i;
      count = 1;
    } else if (i === max) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  if (dist1 === dist2) {
    return ('os gatos trombam e o rato foge');
  }
  if (dist1 < dist2) {
    return ('cat1');
  }
  return ('cat2');
}

// Desafio 8
/* Dica fornecida pelo Gabriel Silvestre durante um grupo de estudos em usar o for.each */
function fizzBuzz(arrayNumbers) {
  let result = [];
  arrayNumbers.forEach((n) => {
    if (n % 15 === 0) {
      result.push('fizzBuzz');
    } else if (n % 3 === 0) {
      result.push('fizz');
    } else if (n % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  });
  return result;
}

// Desafio 9
function verifyChar(string, j, logic) {
  for (let k in logic) {
    if (j === k) {
      string = string.replace(j, logic[k]);
    }
  }
  return string;
}

function encode(string) {
  let logic = {
    a: 1, e: 2, i: 3, o: 4, u: 5,
  };
  for (let j of string) {
    string = verifyChar(string, j, logic);
  }
  return string;
}

function decode(string) {
  let logic = {
    1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u',
  };
  for (let j of string) {
    string = verifyChar(string, j, logic);
  }
  return string;
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
