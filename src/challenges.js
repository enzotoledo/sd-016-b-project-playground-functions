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
function encode(value) {
  // seu código aqui
  let array = value.split("");
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "a") {
      array[i] = 1;
    } else if (array[i] === "e") {
      array[i] = 2;
    } else if (array[i] === "i") {
      array[i] = 3;
    } else if (array[i] === "o") {
      array[i] = 4;
    } else if (array[i] === "u") {
      array[i] = 5;
    }
  }

  return array.join("");
}
function decode(value) {
  // seu código aqui
  let array = value.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '1') {
      array[i] = "a";
    } else if (array[i] === '2') {
      array[i] = "e";
    } else if (array[i] === '3') {
      array[i] = "i";
    } else if (array[i] === '4') {
      array[i] = "o";
    } else if (array[i] === '5') {
      array[i] = "u";
    }
  }
  return array.join("");
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
