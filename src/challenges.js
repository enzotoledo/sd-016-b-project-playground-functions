// Desafio 1
function compareTrue(boolean1, boolean2) {
  if((boolean1 == true) && (boolean2 == true)){
    return true;
  }  else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
  return array[(array.length - 1)] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let points =(wins * 3) + ties; 
  return points;
}

// Desafio 6
function highestCount(array) {
  let timesTheNumberAppear = 0;
  let theHighestNumber = array[0];
  //finds the highest number.
  for (let index = 0; index < array.length; index += 1) {
    theHighestNumber = array[index];
    for(let index2 = 0; index2 < array.length; index2 += 1) {
      if (theHighestNumber < array[index2]) {
        theHighestNumber = array[index2];
      }
    }
  }
  //pass the highest number through the array and check the times it appears.
  for (let index3 = 0; index3 < array.length; index3 += 1) {
    if (theHighestNumber === array[index3]) {
      timesTheNumberAppear += 1;
    }
  }
  return timesTheNumberAppear;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = 0;
  let cat2Distance = 0;
  // Check the distance between the cats and the mouse.
  if ((mouse > cat1) && (mouse > cat2)) {
    cat1Distance = mouse - cat1;
    cat2Distance = mouse - cat2;
  } else if ((mouse > cat1) && (mouse < cat2)) {
    cat1Distance = mouse - cat1;
    cat2Distance = cat2 - mouse;
  } else if ((mouse < cat1) && (mouse < cat2)) {
    cat1Distance = cat1 - mouse;
    cat2Distance = cat2 - mouse;
  } else if ((mouse < cat1) && (mouse > cat2)) {
    cat1Distance = cat1 - mouse;
    cat2Distance = mouse - cat2;
  }
  // returns wich one is closest or if both are in the same distance.
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  } else if (cat1Distance < cat2Distance) {
    return 'cat1';
  } else return 'os gatos trombam e o rato foge'
}

// Desafio 8
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      array [index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    } else {
      array[index] = 'bug!';
    }
  }
  return array;
}
// Desafio 9
/*
 * Consultei o pull request do projeto do Lucas Araujo Carvalho para resolver essa parte.
 * Link: https://github.com/tryber/sd-016-b-project-playground-functions/pull/85
 */
function encode(string) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let codedString = '';
  for (let letter of string) {
    let control = 0;
    for (let property in code) {
      if (letter === property) {
        codedString += code[property]
        control = 1;
        break;
      }
    }
    if (control === 0) {
      codedString += letter;
    }
  }
  return codedString;
}
function decode(string) {
  let code = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decodedString = '';
  for (let letter of string) {
    let control = 0;
    for (let property in code) {
      if (letter === property) {
        decodedString += code[property]
        control = 1;
        break;
      }
    }
    if (control === 0) {
      decodedString += letter;
    }
  }
  return decodedString;
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
