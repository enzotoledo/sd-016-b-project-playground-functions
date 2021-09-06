// Desafio 1
function compareTrue(p1, p2) {
  // seu código aqui
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let resp = [];
  resp[1] = ' ' + arr[0];
  resp[0] = arr.reverse()[0];
  return resp.join(',');
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let highest = -Infinity;
  let theFinalCountUp = 0;
  for (let i in array){
    if (array[i] > highest) {
      highest = array[i];
    }
  }
  for (let i in array) {
    if (array[i] === highest) {
      theFinalCountUp += 1;
    }
  }
return theFinalCountUp;  
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  // seu código aqui
  if (cat1 + 1 == cat2 || cat1 - 1 == cat2) {
    return 'os gatos trombam e o rato foge'
  }
  else if (cat1 - mouse > cat2 - mouse)  {
    return 'cat1'
  }else if (cat2 - mouse > cat1 - mouse ) {
    return 'cat2'
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
