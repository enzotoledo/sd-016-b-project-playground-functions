// Desafio 1
function compareTrue(booleano1, booleano2) {
  if ((booleano1 === true) && (booleano2 === true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = 0;
  areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let arrayReverse = array.reverse();
  let string = arrayReverse[0] + ", " + arrayReverse[arrayReverse.length-1];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numeros) {
  let highestNumber = numeros[0];
  let highestNumberRepet = 0;
  for (let number in numeros) {
    if (highestNumber < numeros[number]) {
      highestNumber = numeros[number];
    }
  }

  for (let repet in numeros) {
    if (highestNumber == numeros[repet]) {
      highestNumberRepet += 1;
    }
  }
  return highestNumberRepet;
}

// Desafio 7 // Consultei a documentação do MDN para encontrar Math.abs() 
// link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
  let distanciCat1 = mouse - cat1;
  let distanciCat2 = mouse - cat2;
  if (Math.abs(distanciCat1) == Math.abs(distanciCat2)) {
    return "os gatos trombam e o rato foge";
  } else if (distanciCat1 > distanciCat2) {
    return "cat1";
  } else if (distanciCat1 < distanciCat2) {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let result = [];
  for (let number in numeros) {
    if ((numeros[number] % 3 == 0) && (numeros[number] % 5 == 0)) {
      result.push("fizzBuzz");
    } else if (numeros[number] % 3 == 0) {
      result.push("fizz");
    } else if (numeros[number] % 5 == 0) {
      result.push("buzz");
    } else {
      result.push("bug!");
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let arrayOfString = string.split("");
  let arrayEncode = [];
  for (let runner in string) {
    if ("a" == string[runner]){
      arrayEncode.push("1");
    } else if ("e" == string[runner]) {
      arrayEncode.push("2");
    } else if ("i" == string[runner]) {
      arrayEncode.push("3");
    } else if ("o" == string[runner]) {
      arrayEncode.push("4");
    } else if ("u" == string[runner]) {
      arrayEncode.push("5");
    } else {
      arrayEncode.push(string[runner]);
    }
  }
  return arrayEncode.join("");
}
function decode(string) {
  let arrayOfString = string.split("");
  let arrayDecode = [];
  for (let runner in string) {
    if ("1" == string[runner]){
      arrayDecode.push("a");
    } else if ("2" == string[runner]) {
      arrayDecode.push("e");
    } else if ("3" == string[runner]) {
      arrayDecode.push("i");
    } else if ("4" == string[runner]) {
      arrayDecode.push("o");
    } else if ("5" == string[runner]) {
      arrayDecode.push("u");
    } else {
      arrayDecode.push(string[runner]);
    }
  }
  return arrayDecode.join("");
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
