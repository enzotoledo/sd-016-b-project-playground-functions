// Desafio 1
function compareTrue(value1, value2) {
if (value1 === true && value2 === true){
  return true;
  }
  else{
  return false;
  } 
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  const area = (base * height)/2;
  return area;
}
console.log(calcArea(51,1));

// Desafio 3
function splitSentence(word) {
  const wordSpace = word.split(' ');
  return wordSpace; 
}
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  const nameList = [ ]
  let names = nameList.push(array[array.length -1], array[0])
  let nameConcat = nameList.join(", ")
  return nameConcat
}
console.log(concatName(['captain', 'my', 'captain']))

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  let somaPoints = vitoria + empate;
  return somaPoints;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(repeatMax) {
 let maior = -1;
 let repeat = 0;
 for (let index = 0; index <= repeatMax.length; index += 1)
    if (maior < repeatMax[index]){
        maior = repeatMax[index];
    }
  for(let index in repeatMax){
     if(maior === repeatMax[index]){
        repeat += 1;
        }
    } 
    return repeat;
}
console.log(highestCount([-2, -2, -1]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catAPos = Math.abs(mouse - cat1);
  let catBPos = Math.abs(mouse - cat2);

  if (catAPos < catBPos) {
    return 'cat1';
  } else if (catAPos > catBPos) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
    }
}
console.log(catAndMouse(0, 3, 2))

// Desafio 8
function fizzBuzz(array) {
  let arrayList = []
  for (let index = 0; index < array.length; index +=1){
    if (array[index] % 3 === 0 && array[index] % 5 === 0  ){
    arrayList.push('fizzBuzz');
      }
      else if(array[index] % 5 === 0 ){
           arrayList.push('buzz');
      }
      else  if(array[index] % 3 === 0){
        arrayList.push('fizz');
      }
      else{
           arrayList.push('bug!')
      }
  }
  return arrayList
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
