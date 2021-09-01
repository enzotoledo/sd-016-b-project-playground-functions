// Desafio 1
function compareTrue(param1, param2) {
  if (param1 == true && param2 == true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2
  return area
}

// Vi a explicação de como utilizar o .split em: https://www.w3schools.com/jsref/jsref_split.asp
// Desafio 3
function splitSentence(phrase) {
  arrPhrase = phrase.split(" ");
  return arrPhrase
}

// Desafio 4
function concatName(names) {
  for (let index = 0; index < names.length; index++) {
    let last = names.pop()
    let fristAndLast = last + ", " + names[0]
    return fristAndLast
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = 0
  if (wins != 0) {
    score += wins * 3
    if (ties != 0) {
      score += ties
    }
  }else if (ties != 0) {
    score += ties
  }
  return score
}

// Desafio 6
function highestCount(string) {
  let biggestNumber = [];
  string.sort()
  if (string[0] >= 0) {
    string.reverse()
  }
  biggestNumber[0] = string[0] - 1
  for (let key in string) {
    let value = string[key]
      if (value > biggestNumber) {
        biggestNumber[0] = value
      } else if (value == biggestNumber[0]) {
        biggestNumber.push(value)
      } 
    }let numb = biggestNumber.length
return numb  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(cat1 - mouse)
  cat2 = Math.abs(cat2 - mouse)
  if (cat1 < cat2) {
    return "cat1"
  } else if (cat2 < cat1) {
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let array = []
  let as = 0
  for (let index = 0; index < arr.length; index += 1) {
    as = arr[index]
    if (as % 15 == 0) {
      as = "fizzBuzz"
      array.push(as)
    } else if (as % 5 == 0) {
      as = "buzz"
      array.push(as)
    } else if (as % 3 == 0) {
      as = "fizz"
      array.push(as)
    } else {
      as = "bug!"
      array.push(as)
    }
  }return array
}

// Vi a explicação de como utilizar o .join em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// Desafio 9
function encode(str) {
  let string = []
  for (let index = 0; index < str.length; index += 1) {
    let as = str[index]
    if (as == "a") {
      as = 1
      string.push(as)
    } else if (as == "e") {
      as = 2
      string.push(as)
    } else if (as == "i") {
      as = 3
      string.push(as)
    } else if (as == "o") {
      as = 4
      string.push(as)
    } else if (as == "u") {
      as = 5
      string.push(as)
    } else {
      string.push(as)
    }
  } stringEncoded = string.join('')
  return stringEncoded
}
function decode(str) {
  let string = []
  for (let index = 0; index < str.length; index += 1) {
    let as = str[index]
    if (as == "1") {
      as = "a"
      string.push(as)
    } else if (as == "2") {
      as = "e"
      string.push(as)
    } else if (as == "3") {
      as = "i"
      string.push(as)
    } else if (as == "4") {
      as = "o"
      string.push(as)
    } else if (as == "5") {
      as = "u"
      string.push(as)
    } else {
      string.push(as)
    }
  } stringEncoded = string.join('')
  return stringEncoded
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
