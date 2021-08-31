// Desafio 1
function compareTrue(value1, value2) {
  if ( ( value1 === true ) && ( value2 === true ) ) { return true; } 
  else { return false; }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(value) {
  let split = value.split(' ');
  return split;
}

// Desafio 4
function concatName(value) {
  let pop = value.pop();
  let shift = value.shift();
  let tudo = pop + ', ' + shift;
  return tudo;
}

// Desafio 5
function footballPoints(wins, ties) {
  let ganho = wins * 3;
  let points = ganho + ties;
  return points;
}

// Desafio 6
function highestCount(arr) {
  let count = 0;
  let maior = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dis1 = Math.abs(mouse - cat1);
  let dis2 = Math.abs(mouse - cat2);
  if(dis1 === dis2) {
    return ('os gatos trombam e o rato foge');
  } else if (dis1 > dis2) {
    return ('cat2');
  } else {
    return ('cat1')
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
