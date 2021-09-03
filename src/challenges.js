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
  let bigger = -Infinity;
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
function encode(x) {
  let str = x.replace(/[a]/g, '1').replace(/[e]/g, '2').replace(/[i]/g, '3').replace(/[o]/g, '4').replace(/[u]/g, '5');
  return str;
}

function decode(y) {
  let str = y.replace(/[1]/g, 'a').replace(/[2]/g, 'e').replace(/[3]/g, 'i').replace(/[4]/g, 'o').replace(/[5]/g, 'u');
  return str;
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
