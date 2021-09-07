// Desafio 1
function compareTrue(v, number) {
  // seu código aqui
  return v && number
}

// Desafio 2
function calcArea(b, h) {
  // seu código aqui
  return b * h / 2;
}

// Desafio 3
function splitSentence(s) {
  // seu código aqui
  return s.split(" ");
}

// Desafio 4
function concatName(v) {
  // seu código aqui
  return v[v.length - 1].concat(", ", v[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(value) {
  // seu código aqui
  let count = 0;
  let high = 0;
  for (let number of value) {
    let newNumber = Math.abs(number);
    if (high < newNumber) {
      high = newNumber;
      count = 1;
    } else if (high === number) {
      count++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dist1 = Math.abs(mouse - cat1), dist2 = Math.abs(mouse - cat2);
  if (dist1 === dist2) {
    return "os gatos trombam e o rato foge";
  } else if (dist1 < dist2) {
    return "cat1";
  } else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(value) {
  // seu código aqui
  let array = [];
  
  for (let v of value) {
    if (v % 3 === 0 && v % 5 === 0) {
      array.push('fizzBuzz');
    } else if (v % 3 === 0) {
      array.push('fizz');
    } else if (v % 5 === 0) {
      array.push('buzz'); 
    } else {
      array.push('bug!');
    }
  }

  return array;
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
