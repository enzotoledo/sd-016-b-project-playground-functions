// Desafio 1
function compareTrue(param1, param2) {
  if ((param1 === true) && (param2 === true)) return true;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(param) {
  const resultado = param.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  let reversedArray = array.reverse();

  return (`${reversedArray[0]}, ${reversedArray[reversedArray.length - 1]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins !== 0) {
    wins *= 3;
  }
  return wins + ties;
}

// Desafio 6
function highestCount(array) {
  let sum = 0;
  let indexBigger = 0;

  for (const key in array) {
    if (array[indexBigger] < array[key]) {
      indexBigger = key;
    }
  }
  for (const key in array) {
    if (array[indexBigger] === array[key]) {
      sum += 1;
    }
  }
  return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Mouse = Math.abs(cat1 - mouse);
  let cat2Mouse = Math.abs(cat2 - mouse);

  if (cat1Mouse < cat2Mouse) {
    return 'cat1';
  } if (cat1Mouse > cat2Mouse) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

console.log(catAndMouse(10, 4, 22));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
