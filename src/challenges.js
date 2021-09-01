function compareTrue(param1, param2) {
  return param1 && param2;
}

function calcArea(base, height) {
  return (base * height) / 2;
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
  for( i = 0; i < table.length; i++){
    if( max === table[i] ) {
      result++;
    };
  };
  return result;
}

function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);

  if(cat1 < cat2){
    return 'cat1';
  }else if(cat1 > cat2){
      return 'cat2';
  }else{
    return 'os gatos trombam e o rato foge';
  };
};

function fizzBuzz(array) {
  for(i = 0; i < array.length; i++){
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

function encode(string) {
  let encode1 = '';
  for(i = 0; i < string.length; i++){
    if(string[i] === 'a'){
      encode1 += '1';
    }else if (string[i] === 'e'){
      encode1 += '2';
    }else if (string[i] === 'i'){
      encode1 += '3';
    }else if (string[i] === 'o'){
      encode1 += '4';
    }else if (string[i] === 'u'){
      encode1 += '5';
    }else {
      encode1 += string[i];
    }
  }
  return encode1;
}

function decode(string) {
  let decode1 = '';
  for(i = 0; i < string.length; i++){
    if(string[i] === '1'){
      decode1 += 'a';
    }else if (string[i] === '2'){
      decode1 += 'e';
    }else if (string[i] === '3'){
      decode1 += 'i';
    }else if (string[i] === '4'){
      decode1 += 'o';
    }else if (string[i] === '5'){
      decode1 += 'u';
    }else {
      decode1 += string[i];
    }
  }
  return decode1;
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