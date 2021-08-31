// Desafio 1
function compareTrue(numberOne, numberTwo) {
  if (numberOne === true && numberTwo === true) {
    return true;
  } else {
      return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangle = (base * height) / 2;
  return areaTriangle;
}

// Desafio 3
function splitSentence(text) {
  let x = text.split(' ');
  return x;
}

// Desafio 4
function concatName(listOne) {
  let lastArray = listOne [listOne.length - 1] + ', ' + listOne[0];
  return lastArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  for (let i = 1; i <= wins; i += 1) {
    points += 3; 
  }
  for (let i = 1; i <= ties; i += 1) {
    points += 1;
  }
  return points;
}

// Desafio 6
function highestCount(listTwo) {
  let accountant = 0;
  let higherNumber = Math.max.apply(null, listTwo);
  for (let i = 0; i < listTwo.length; i += 1) {
    if (listTwo[i] === higherNumber) {
      accountant += 1;
    }
  }
  return accountant;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);
  if (distance1 < distance2) {
    return "cat1";
  } else if (distance1 === distance2) {
      return "os gatos trombam e o rato foge";
  } else {
      return "cat2";
  }
}

// Desafio 8
function fizzBuzz(listTree) {
  let print = [];
  for (let i = 0; i < listTree.length; i += 1) {
    let divisibleTree = (listTree[i] % 3);
    let divisibleFive = (listTree[i] % 5);
    if (divisibleTree === 0 && divisibleFive === 0) {
      print.push ("fizzBuzz"); 
    } else if (divisibleTree === 0) {
        print.push ("fizz");
    } else if (divisibleFive === 0){
        print.push ("buzz");
    } else {
        print.push ("bug!");
    }
  }
  return print;
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
