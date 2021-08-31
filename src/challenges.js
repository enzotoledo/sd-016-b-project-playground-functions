// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
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
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(strings) {
  return strings[strings.length - 1] + ", " + strings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6 // NÃO CONSEGUI
function highestCount(numbers) {
  let verificaNumero = numbers;
  let higherNumber = 0;
  let sameNumber = 0;

  for(indice in numbers){

  }
  return higherNumber;
}
console.log(highestCount([7, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = 0;
  let distancia2 = 0;
  if (cat1 > mouse){
    distancia1 = cat1 - mouse;
  } else {
    distancia1 = mouse - cat1;
  }
  if (cat2 > mouse){
    distancia2 = cat2 - mouse;
  } else {
    distancia2 = mouse - cat2;
  }
  if (distancia1 < distancia2){
    return "cat1";
  } else if (distancia1 > distancia2){
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(20, 15, 10));
// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
