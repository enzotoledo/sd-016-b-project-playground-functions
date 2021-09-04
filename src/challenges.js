// Desafio 1
function compareTrue(a, b) {
  if ((a === true) && (b === true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}


// Desafio 3
function splitSentence(string) {
  let arrayDeString = string.split(' ');
  return arrayDeString;
}


// Desafio 4
function concatName(stringArray) {
  let stringDeArray = stringArray[stringArray.length - 1] + ", " + stringArray[0];
  return stringDeArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  const pointsOfWins = 3;
  const pointsOfTies = 1;
  let resultChampion = (wins * pointsOfWins) + (ties * pointsOfTies);
  return resultChampion;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let biggestNumber = arrayDeNumeros[0];
  for (let index = 1; index < arrayDeNumeros.length; index += 1) {
    if (arrayDeNumeros[index] > biggestNumber) {
      biggestNumber = arrayDeNumeros[index];
    }
  }
  let vezesMaiorNumero = 0;
  for (let index2 = 0; index2 < arrayDeNumeros.length; index2 += 1) {
    if (arrayDeNumeros[index2] === biggestNumber) {
      vezesMaiorNumero += 1;
    }
  }
  return vezesMaiorNumero;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs((cat1 - mouse)) > Math.abs((cat2 - mouse))) {
    return 'cat2';
  }
  if (Math.abs((cat1 - mouse)) < Math.abs((cat2 - mouse))) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(2, 3, 4));

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let novoArray = [];
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if (arrayDeNumeros[index] % 3 === 0 && arrayDeNumeros[index] % 5 === 0) {
      novoArray.push("fizzBuzz");
    } else if (arrayDeNumeros[index] % 3 === 0) {
      novoArray.push("fizz");
    } else if (arrayDeNumeros[index] % 5 === 0) {
      novoArray.push("buzz");
    } else {
      novoArray.push("bug!");
    }
  }
  return novoArray;
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
