// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  result = (base*height) / 2
  return result;
}
// Desafio 3
function splitSentence(string) {
    return string.split(" ");
}

// Desafio 4
function concatName(array) {
    fullName = array[array.length-1] +", "+ array[0];
    return fullName;
}

// Desafio 5
function footballPoints(wins, ties) {
  points = wins*3 + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maior = Number.MIN_SAFE_INTEGER;
      for (let index = 0; index < array.length; index++) {
           contador=0;
              if (maior < array[index] ) {
                maior = array[index];              
              }else{}
      for (let index2 = 0 ; index2 < array.length; index2++) {
              if(array[index2] == maior ) {
                contador +=1;
                }
            }       
      }
      return contador;
     }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    if (Math.abs((mouse) - (cat1)) > Math.abs((mouse) - (cat2))) {
      return "cat2";
    }else if (Math.abs((mouse) - (cat1)) < Math.abs((mouse) - (cat2))) {
      return "cat1";
    }else if (Math.abs(((mouse) - (cat1))) == Math.abs(((mouse) - (cat2))))
      return "os gatos trombam e o rato foge";
    }

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = []
    for (let index = 0; index < array.length; index++) {
      if (array[index] % 3 == 0 && array[index] % 5 !== 0 ) {
        fizzBuzzArray.push("fizz");
      } else if (array[index] % 3 !== 0 && array[index] % 5 == 0 ) {
        fizzBuzzArray.push("buzz");
      } else if (array[index] % 3 == 0 && array[index] % 5 == 0 ) {
        fizzBuzzArray.push("fizzBuzz");
      } else {
        fizzBuzzArray.push("bug!");
      }
    }
    return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  encoded = [];
  arrayString = string.split('');
  for (let index = 0; index < arrayString.length; index++) {
    if(arrayString[index] == "a" ) {
      encoded.push("1");
    }else if(arrayString[index] == "e" ) {
      encoded.push("2");
    }else if(arrayString[index] == "i" ) {
      encoded.push("3");
    }else if(arrayString[index] == "o" ) {
      encoded.push("4");
    }else if(arrayString[index] == "u" ) {
      encoded.push("5");
    }else {
      encoded.push(arrayString[index]);
    }
  }
  return encoded.join('');
}

function decode(string) {
  decoded = [];
  arrayString = string.split('');
  for (let index = 0; index < arrayString.length; index++) {
    if(arrayString[index] == "1" ) {
      decoded.push("a");
    }else if(arrayString[index] == "2" ) {
      decoded.push("e");
    }else if(arrayString[index] == "3" ) {
      decoded.push("i");
    }else if(arrayString[index] == "4" ) {
      decoded.push("o");
    }else if(arrayString[index] == "5" ) {
      decoded.push("u");
    }else {
      decoded.push(arrayString[index]);
    }
  }
    return decoded.join('');
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
