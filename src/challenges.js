// Desafio 1
function compareTrue(a, b) {
  return (a && b);
}

// Desafio 2
function calcArea(base, height) {
  return (base*height/2);
}

// Desafio 3
/* Funcionalidade do split pega na seguinte url:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */
function splitSentence(stringToSplit) {
  return stringToSplit.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return(arrayString.pop()+', '+arrayString[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3+ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let max = -Infinity;
  let count = 0;
  for(i of arrayNumbers){
    if(i>max){
      max = i;
      count = 1;
    }else if(i===max){
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse-cat1);
  let dist2 = Math.abs(mouse-cat2);
  if(dist1 === dist2){
    return("os gatos trombam e o rato foge");
  }else if(dist1<dist2){
    return('cat1');
  }else{
    return('cat2');
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = [];
  for(i of arrayNumbers){
    if((i%3==0)&&(i%5==0)){
      result.push('fizzBuzz');
    }else if(i%3==0){
      result.push('fizz');
    }else if(i%5==0){
      result.push('buzz');
    }else{
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let logic = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  let result = '';
  for(j of string){
    for(k in logic){
      if(j===k){
        result += logic[k];
      }else{
        result += j;
      }
    }
  }
  return result;
}


function decode(string) {
  let logic = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  let result = '';
  for(j of string){
    let z = 0;
    for(k in logic){
      if(j==logic[k]){
        result += k;
        z = 1;
        break;
      }
    }
    if(z===0){
      result += j;
    }
  }
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
