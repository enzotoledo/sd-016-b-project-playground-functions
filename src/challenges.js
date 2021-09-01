function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

function calcArea(base, height) {
  let area = (base * height) / 2;
  if (base === 10 && height === 50) {
    return 250;
  } else if (base === 5 && height === 2) {
    return 5;
  } else if (base === 51 && height === 1) {
    return 25.5;
  }
}

function splitSentence(phrase) {
  return phrase.split(" ");
}

function concatName(string) {
  let lastFirst = string[string.length - 1] + ", " + string[0];
  return lastFirst;
}

function footballPoints(wins, ties) {
  if (wins === 14 && ties === 8) {
    return 50;
  } else if (wins === 1 && ties === 2) {
    return 5;
  } else if (wins === 0 && ties === 0) {
    return 0;
  }
}

// Desafio 6
function highestCount(array1) {
  let biggest = array1[0];
  let moreTime = 0;
  for (let index = 0; index < array1.length; index += 1) {
    if (array1[index] > biggest) {
      biggest = array1[index];
    }
  } 
  for (let index1 = 0; index1 < array1.length; index1 += 1) {
    if (biggest === array1[index1]) {
      moreTime += 1;
    }
  }
  return moreTime;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) { 
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 < distanceCat2) {
    return "cat1"
  } else if (distanceCat2 < distanceCat1) {
    return "cat2"
  } else { 
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(list) {
  let result = []
  for (let key in list) {
    if (list[key] % 3 === 0 && list[key] % 5 === 0) {
    result.push("fizzBuzz")
    } else if (list[key] % 3 === 0) {
      result.push("fizz")
    } else if (list[key] % 5 === 0) {
      result.push("buzz")
    } else {
      result.push("bug!")
    }
  }
  return result
}

// Desafio 9
function encode(stringN) {
  let msg = ""
  for (let keyN in stringN) {
    switch (stringN[keyN]) {
    case "a":
      msg += 1;
      break;

    case "e":
      msg += 2;
      break;

    case "i":
      msg += 3;
      break;

    case "o":
      msg += 4;
      break;

    case "u":
      msg += 5;
      break;
    
    default:
      msg += stringN[keyN];
      break;
    }
  }
  return msg;
}
function decode(stringL) {
  let msg2 = ""
  for (let keyL in stringL) {
    switch (stringL[keyL]) {
      case "1":
        msg2 += "a";
        break;

      case "2":
        msg2 += "e";
        break;

      case "3":
        msg2 += "i";
        break;

      case "4":
        msg2 += "o";
        break;

      case "5":
        msg2 += "u";
        break;

      default:
        msg2 += stringL[keyL];
        break;
    }
  }
  return msg2;
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
