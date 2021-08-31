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
