// Lucas Camargo
// Playground Functions
// --------------------------------------------------------------------------------------------------
// Desafio 1
function compareTrue(par1, par2) {
  // seu código aqui
  return (par1 && par2);
}
// --------------------------------------------------------------------------------------------------
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}
// --------------------------------------------------------------------------------------------------
// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}
// --------------------------------------------------------------------------------------------------
// Desafio 4
function concatName(array) {
  // seu código aqui
  let firstElement = array.shift();
  let lastElement = array.pop();
  let concatElements = lastElement.concat(', ', firstElement);
  return concatElements;
}
// --------------------------------------------------------------------------------------------------
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}
// --------------------------------------------------------------------------------------------------
// Desafio 6
function highestCount(array) {
  // seu código aqui
  let highestNumber = array[0];
  let highestRepeted = 0;
  let counter = 1;
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] === highestNumber) {
      counter += 1;
    }
    if (array[i] > highestNumber) {
      highestNumber = array[i];
      counter = 1;
    }
  }
  highestRepeted = counter;
  return highestRepeted;
}
// --------------------------------------------------------------------------------------------------
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let positionCat1 = Math.abs(cat1 - mouse);
  let positioncat2 = Math.abs(cat2 - mouse);
  if (positionCat1 < positioncat2) {
    return 'cat1';
  } else if (positionCat1 > positioncat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
// --------------------------------------------------------------------------------------------------
// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      newArray.push('fizz');
    } else if (array[i] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}
// --------------------------------------------------------------------------------------------------
// Desafio 9
function encode(string) {
  // seu código aqui
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case 'a':
        string = string.replace('a', '1');
        break;
      case 'e':
        string = string.replace('e', '2');
        break;
      case 'i':
        string = string.replace('i', '3');
        break;
      case 'o':
        string = string.replace('o', '4');
        break;
      case 'u':
        string = string.replace('u', '5');
        break;
    }
    newString = string;
  }
  return newString;
}
//--------------------------------------------------------------------------------------------------
function decode(string) {
  // seu código aqui
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case '1':
        string = string.replace('1', 'a');
        break;
      case '2':
        string = string.replace('2', 'e');
        break;
      case '3':
        string = string.replace('3', 'i');
        break;
      case '4':
        string = string.replace('4', 'o');
        break;
      case '5':
        string = string.replace('5', 'u');
        break;
    }
    newString = string;
  }
  return newString;
}
// --------------------------------------------------------------------------------------------------
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
