// Desafio 1
function compareTrue(firstValue, secondValue) {
  if ((firstValue == true)&&(secondValue == true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}
console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(listOfNames) {
  let result = listOfNames[listOfNames.length - 1] + ', ' + listOfNames[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbersList) {
  let higherNumber = Math.max.apply(null, numbersList);
  let count = 0;
  for (let index = 0; index < numbersList.length; index += 1) {
    if (numbersList[index] === higherNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist = mouse - cat1;
  let dist2 = mouse - cat2;

  if (dist < 0) {
    dist = Math.abs(-1, dist);
  } else if (dist2 < 0) {
    dist2 = Math.abs(-dist2, dist2);
  }

  if (dist < dist2) {
    let closer = 'cat1';
    return closer;
  } else if (dist2 < dist) {
    let closer = 'cat2';
    return closer;
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numericArray) {
  let result = [];
  for (let position of numericArray) {
    if ((position % 3 === 0) && (position % 5 === 0)) {
      result.push('fizzBuzz');
    } else if (position % 3 === 0) {
      result.push('fizz');
    } else if (position % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(message) {
  message = message.replace(/a/g, 1);
  message = message.replace(/e/g, 2);
  message = message.replace(/i/g, 3);
  message = message.replace(/o/g, 4);
  message = message.replace(/u/g, 5);
  return message;
}

function decode(message) {
  message = message.replace(/1/g, 'a');
  message = message.replace(/2/g, 'e');
  message = message.replace(/3/g, 'i');
  message = message.replace(/4/g, 'o');
  message = message.replace(/5/g, 'u');
  return message;
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
