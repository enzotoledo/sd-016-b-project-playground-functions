// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)){
    return true; 
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(phrase) {
  let resultado = phrase.split(" ");
  return resultado;
}

// Desafio 4
function concatName(array) {
  let firstName = array [0];
  let lastName = array.[array.length - 1];
  let resultado = lastName + ", " + firstName;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = wins * 3;
  let draw = ties; 
  return victory + draw;
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let highest = -Infinity;
    for (let i = 0; i < array.length; i += 1) {
      if (array [i] > highest) {
        highest = array [i];
        count = 1;
      } else if (array [i] === highest) {
        count ++;
      }
    }
    return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for ( let i = 0; i < numbers.length; i +=1) {
    if (numbers[i] % 15 === 0) {
    result.push('fizzBuzz');
    } else if (numbers[i] % 3 === 0){
      result.push('fizz');
    } else if (numbers[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result; 
}

// Desafio 9
function encode(string) {
  let vogais = [a, e, i, o, u];
  let numbers = [1, 2, 3, 4, 5];
  for (let i = 0; i < string; i ++){
    for (let j = 0; i < vogais; i ++){
      if (vogais[j] === string[i]){
        return string[i] === numbers;
      }
    }
  }
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
