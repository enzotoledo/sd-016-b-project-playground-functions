// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(strings) {
  return `${strings[strings.length - 1]}, ${strings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6 // NÃO CONSEGUI
function highestCount(numbers) {
  // let verificaNumero = numbers;
  // let higherNumber = 0;
  // let sameNumber = 0;

  // for (indice in numbers) {

  // }
  // return higherNumber;
}
// console.log(highestCount([7, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = 0;
  let distancia2 = 0;
  if (cat1 > mouse) {
    distancia1 = cat1 - mouse;
  } else {
    distancia1 = mouse - cat1;
  }
  if (cat2 > mouse) {
    distancia2 = cat2 - mouse;
  } else {
    distancia2 = mouse - cat2;
  }
  if (distancia1 < distancia2) {
    return 'cat1';
  } if (distancia1 > distancia2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numeros) {
  for(let indice in numeros){
    if (numeros[indice] % 3 === 0 && numeros[indice] % 5 === 0 ){
      numeros[indice] = "fizzBuzz";
    } else if (numeros[indice]  % 5 === 0 ){
      numeros[indice] = "buzz";
    } else if (numeros[indice]  % 3 === 0 ){
      numeros[indice] = "fizz";
    } else {
      numeros[indice] = "bug!";
    }
  }
  return numeros
}

// Desafio 9
function encode(string) {
  let split = '';
  split = string.split('')
   for (indice in split){
    if (split[indice] === "a"){
      split[indice] = "1";
    } else if (split[indice] === "e"){
      split[indice] = "2";
    } else if (split[indice] === "i"){
      split[indice] = "3";
    } else if (split[indice] === "o"){
      split[indice] = "4";
    } else if (split[indice] === "u"){
      split[indice] = "5";
    }
   }
  return split.join('');
}


function decode(string) {
  let split = '';
  split = string.split('')

  for (indice in split){
    if (split[indice] === "1"){
      split[indice] = "a";
    } else if (split[indice] === "2"){
      split[indice] = "e";
    } else if (split[indice] === "3"){
      split[indice] = "i";
    } else if (split[indice] === "4"){
      split[indice] = "o";
    } else if (split[indice] === "5"){
      split[indice] = "u";
    }
   }
  // return frase;
  
  return split.join('');
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
