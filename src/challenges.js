// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = wins * 3;
  let draw = ties;
  return victory + draw;
}

// Desafio 6
function highestCount(numbers) {
  let bigger = Math.max.apply(numbers);
  for (let index in numbers) {
    if (numbers[index] > bigger) {
      bigger = numbers[index];
    }
  }
  let biggerCount = 0;
  for (let count in numbers) {
    if (bigger === numbers[count]) {
      biggerCount += 1;
    }
  }
  return biggerCount;
}
console.log(highestCount([2, 15, 7, 9, 45]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.sqrt((cat1 - mouse) ** 2);
  let distancia2 = Math.sqrt((cat2 - mouse) ** 2);
  let catcher;
  if (distancia1 < distancia2) {
    catcher = 'cat1';
  }
  if (distancia2 < distancia1) {
    catcher = 'cat2';
  }
  if (distancia1 === distancia2) {
    catcher = 'os gatos trombam e o rato foge';
  }
  return catcher;
}

// Desafio 8
function fizzBuzz(alarm) {
  let alarmText = [];
  for (let index in alarm) {
    if ((alarm[index] % 5 === 0) && (alarm[index] % 3 === 0)) {
      alarmText.push('fizzBuzz');
    } else if (alarm[index] % 5 === 0) {
      alarmText.push('buzz');
    } else if (alarm[index] % 3 === 0) {
      alarmText.push('fizz');
    } else {
      alarmText.push('bug!');
    }
  }
  return alarmText;
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
