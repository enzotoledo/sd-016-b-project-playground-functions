// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// Desafio 4
function concatName(arr) {
  return arr[arr.length - 1] + ', ' + arr[0];
}
// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties 
  return points
}

// Desafio 6
function highestCount(num) {
  let organizedNums = num.sort();
  let highestNums = organizedNums[num.length - 1];
  let totalHighestNums = 0;
  let negativeNums
  for (let index in num){
    if(Math.abs(num[index]) === highestNums){
      totalHighestNums ++;
    }
  }
  return totalHighestNums;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2){
  let gato1ganha = 'cat1'
  let gato2ganha = 'cat2'
  let gatosTrombam = 'os gatos trombam e o rato foge'
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return gato1ganha;
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
    return gato2ganha;
  } else {
    return gatosTrombam;
  }
}
// Esse requisito só foi feito graças a thread do Leandro Boralli no Slack. 
// Referência: https://trybecourse.slack.com/archives/C02B4PPBERE/p1630436206374200


// Desafio 8
function fizzBuzz(arrOfNums) {
  for (let index = 1; index < arrOfNums.length; index++) {
    
  }
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
