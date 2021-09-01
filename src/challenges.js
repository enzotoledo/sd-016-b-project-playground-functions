// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(Bola) {
  let desafio = Bola.split(' ');
  return desafio;
}

// Desafio 4
function concatName(array) {
  let lastName = array[array.length - 1];
  let firstName = array[0];
  let result = lastName + ', ' + firstName;
  console.log(result);
  return result;
}

const array = ['Diego', 'Araújo', 'Santos', 'Mendes'];
concatName(array);

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = ((wins * 3) + ties);
  return resultado;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let maiorNumero = -Infinity;
  let repete = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  for (let index2 = 0; index2 < array.length; index2 +=1){
    if (maiorNumero === array[index2]) {
    repete += 1;
    }
  }
  return repete;
}
console.log(highestCount([1, 2, 9, 3, 6, 7, 9]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;
  
  if(distanciaCat1 < 0 ){
    distanciaCat1 = distanciaCat1 * -1;
  }
  if(distanciaCat2 < 0 ){
    distanciaCat2 = distanciaCat2 * -1;
  }
  if(distanciaCat1 < distanciaCat2){
  return 'cat1'
}
  else if(distanciaCat2 < distanciaCat1){
    return 'cat2'

  }else{
    return 'os gatos trombam e o rato foge'
  }
}
console.log(catAndMouse([1, 3, 2]));

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {

    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultado.push("fizzBuzz");
    }
    else if (array[index] % 3 === 0) {
      resultado.push("fizz");
    }
    else if (array[index] % 5 === 0) {
      resultado.push("buzz");
    }
    else {
      resultado.push("bug!");
    }
  }
  return resultado 
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
