// Desafio 1
function compareTrue(value1, value2) {
  if ( ( value1 === true ) && ( value2 === true ) ) { return true; } 
  else { return false; }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(value) {
  let split = value.split(' ');
  return split;
}

// Desafio 4
function concatName(value) {
  let pop = value.pop();
  let shift = value.shift();
  let tudo = pop + ', ' + shift;
  return tudo;
}

// Desafio 5
function footballPoints(wins, ties) {
  let ganho = wins * 3;
  let points = ganho + ties;
  return points;
}

// Desafio 6
function highestCount(arr) {
  let count = 0;
  let maior = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dis1 = Math.abs(mouse - cat1);
  let dis2 = Math.abs(mouse - cat2);
  if(dis1 === dis2) {
    return ('os gatos trombam e o rato foge');
  } else if (dis1 > dis2) {
    return ('cat2');
  } else {
    return ('cat1')
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let resultado = [];

  for(let one of arr){
    if((one % 3 == 0) && (one % 5 == 0)){
      resultado.push('fizzBuzz')
    } else if(one % 3 == 0){
      resultado.push('fizz')
    } else if (one % 5 == 0) {
      resultado.push('buzz')
    } else {
      resultado.push('bug!')
    }
  }
  return resultado;
}

// Desafio 9
function encode(frase) {
  let array = frase.split('');
  let codificado = [];
  for (let i = 0; i < array.length; i += 1){
    if (array[i] == "a"){
      codificado.push(1);
    } else if (array[i] == "e"){
      codificado.push(2);
    } else if (array[i] == "i"){
      codificado.push(3);
    } else if (array[i] == "o"){
      codificado.push(4);
    } else if (array[i] == "u"){
      codificado.push(5);
    } else {
      codificado.push(array[i]);
    }
  }
  return(codificado.join(''));
}

function decode(frase){
  let array = frase.split('');
  let decodificado = [];
  for (let i = 0; i < array.length; i += 1){
    if (array[i] == 1){
      decodificado.push("a");
    } else if (array[i] == 2){
      decodificado.push("e");
    } else if (array[i] == 3){
      decodificado.push("i");
    } else if (array[i] == 4){
      decodificado.push("o");
    } else if (array[i] == 5){
      decodificado.push("u");
    } else {
      decodificado.push(array[i]);
    }
  }
  return(decodificado.join(''));
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
