function compareTrue(param1, param2) {
  return param1 && param2;
}

function calcArea(base, height) {
  return base * height / 2;
}

function splitSentence(paramText) {
  let frase = paramText.split(" ");
  return frase;
}

function concatName(text) {
  let firstText = text[text.length - 1];
  let lastText =  text[0];

  let result = firstText+ ", " +lastText;
  return result;
}

function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
  return result;
}

function highestCount(table) {
  let max = Math.max.apply({}, table);
  let result = 0;
  for( i = 0; i < table.length; i += 1){
    if(max === table[i]){
      result += 1;
    };
  };
  return result;
}

function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);
  if(cat1 < cat2){
    return 'cat1'
  }else if(cat1 > cat2){
      return 'cat2'
  }else{
    return 'os gatos trombam e o rato foge'
  };
}

function fizzBuzz(array) {
  for(i = 0; i < array.length; i += 1){
    if(array[i] % 15 == 0 ){
      array[i] = "fizzBuzz";
    }else if(array[i] % 3 == 0){
      array[i] = "fizz";
    }else if(array [i] % 5 == 0){
      array[i] = "buzz";
    }else{
      array[i] = "bug!";
    };
  };
  return array;
}

// Desafio 9
function encode(string) {
  let vogal = {
    a:'1',
    e:'2',
    i:'3',
    o:'4',
    u:'5',
  };
  let result = '';
  const array = string.split(' ');
  for(let key of array){
    result += (vogal[key] || key);
  };
  return result;
}

function decode(string) {
  let vogal = {
    1:'a',
    2:'e',
    3:'i',
    4:'o',
    5:'u',
  };
  let result = '';
  const array = string.split(' ');
  for(let key of array){
    result += (vogal[key] || key);
  };
  return result;
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