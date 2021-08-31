// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA && valueB === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  let words = str.split(" ");
  return words;
}

// Desafio 4
function concatName(arr) {
  let strings = `${arr[arr.length - 1]}, ${arr[0]}`;
  return strings;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = 0;
  total = (3 * wins) + (1 * ties);
  return total;
}

// Desafio 6
function highestCount(arr) {
  let count = 0;
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  for (let j = 0; j < arr.length; j += 1) {
    if (largest === arr[j]) {
      count += 1;
    }
  }
  return count;
}

// https://stackoverflow.com/questions/52999505/how-do-i-find-the-largest-negative-integer-in-an-array Referencia a -Infinity encontrado neste link;

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let dist1toMouse = Math.abs(cat1 - mouse);
  let dist2toMouse = Math.abs(cat2 - mouse);
  if (dist1toMouse > dist2toMouse) {
    return "cat2";
  } else if (dist1toMouse < dist2toMouse) {
    return "cat1";
  } else if (dist2toMouse == dist1toMouse) {
    return "os gatos trombam e o rato foge";
  }
}

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
