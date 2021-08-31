// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA && valueB === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  let words = str.split(" ");
  return words;
}

// Desafio 4
function concatName(arr) {
  let strings = `${arr[arr.length - 1]}, ${arr[0]}`;
  return strings;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = 0;
  total = (3 * wins) + (1 * ties);
  return total;
}

// Desafio 6
function highestCount(arr) {
  let count = 0;
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  for (let j = 0; j < arr.length; j += 1) {
    if (largest === arr[j]) {
      count += 1;
    }
  }
  return count;
}

// https://stackoverflow.com/questions/52999505/how-do-i-find-the-largest-negative-integer-in-an-array Referencia a -Infinity encontrado neste link;

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let distA = Math.abs(mouse - cat1);
  let distB = Math.abs(mouse - cat2);
  if (distA < distB) {
    return "cat1";
  } else if (distA > distB) {
    return "cat2";
  } else if (distA === distB) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      result.push("fizzBuzz");
    } else if (arr[i] % 3 === 0) {
      result.push("fizz");
    } else if (arr[i] % 5 === 0) {
      result.push("buzz");
    } else if (arr[i] % 3 !== 0 && arr[i] % 5 !== 0) {
      result.push("bug!");
    }
  }
  return result;
}

// Desafio 9
function encode(str) {
  let encoded = str.replace(/[a]/g, "1").replace(/[e]/g, "2").replace(/[i]/g, "3").replace(/[o]/g, "4").replace(/[u]/g, "5");
  return encoded;
}
function decode(str) {
  let decoded = str.replace(/[1]/g, "a").replace(/[2]/g, "e").replace(/[3]/g, "i").replace(/[4]/g, "o").replace(/[5]/g, "u");
  return decoded;
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
