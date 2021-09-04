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
function encode(vogaisEmNumeros) {
  vogaisEmNumeros = vogaisEmNumeros.replace(/a/g, '1');
  vogaisEmNumeros = vogaisEmNumeros.replace(/e/g, '2');
  vogaisEmNumeros = vogaisEmNumeros.replace(/i/g, '3');
  vogaisEmNumeros = vogaisEmNumeros.replace(/o/g, '4');
  vogaisEmNumeros = vogaisEmNumeros.replace(/u/g, '5');
  return vogaisEmNumeros;
}


function decode(numeroEmVogais) {
  numeroEmVogais = numeroEmVogais.replace(/1/g, 'a');
  numeroEmVogais = numeroEmVogais.replace(/2/g, 'e');
  numeroEmVogais = numeroEmVogais.replace(/3/g, 'i');
  numeroEmVogais = numeroEmVogais.replace(/4/g, 'o');
  numeroEmVogais = numeroEmVogais.replace(/5/g, 'u');
  return numeroEmVogais;
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
