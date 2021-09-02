// Desafio 1
function compareTrue(a,b) {
  if ((a == true) && (b == true)) {
    return true;
  }else {
    return false;
  }

}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(strPart) {
  let strTam = strPart.length;
  let strLast = strPart.length - 1;
  let strReturn = [];
  let strTemp = "";
  
  for(let contar = 0; contar < strTam; contar++){
      if(strPart[contar] !== " ") {
          strTemp += strPart[contar];
          if(contar == strLast){
              strReturn.push(strTemp);
          }
      }else{
          strReturn.push(strTemp);
          strTemp = "";
      }
  }return strReturn;
}

// Desafio 4
function concatName(str) {
  let str01 = str.length-1
  let resultStrings = str[str01]+', '+str[0];
  return resultStrings;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;

}

// Desafio 6
function highestCount(n) {
  let numBig = Math.max(...n);
  let qtd = 0;
  for(let i = 0; i < n.length; i++){
    if(n[i] === numBig){
      qtd = qtd + 1;
    }
  }
  return qtd;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrayNub) {
  let divTres;
  let divCinco;
  let result = [];
  
  for(let index = 0 ; index < arrayNub.length; index++){
    
    divTres = arrayNub[index] % 3;
    divCinco = arrayNub[index] % 5;
  
    if(divTres === 0 && divCinco === 0 ){
      result.push('fizzBuzz');
    }else if(divTres === 0){
      result.push('fizz');
    }else if(divCinco === 0){
      result.push('buzz');
    }else{
      result.push('bug!');
    }
    
  }
  arrayNub = result;
  return arrayNub;
  }
  

// Desafio 9
function encode(str) {
  let vog = ['a', 'e', 'i', 'o', 'u'];
  let tamStr = str.length;
  let resultStr = '';
  for(let counter = 0; counter < tamStr ; counter += 1){
    switch(str[counter]){
      case 'a':
          resultStr += '1';
          break;
        case 'e':
          resultStr += '2';
          break;
        case 'i':
          resultStr += '3';
          break;
        case 'o':
          resultStr += '4';
          break;
        case 'u':
          resultStr += '5';
          break;
        default:  
          resultStr += str[counter];
    } 
  }return resultStr;
}
function decode(str2) {
  let vog = ['1', '2', '3', '4', '5'];
  let tamStr2 = str2.length;
  let resultStr2 = '';
  for(let counter2 = 0; counter2 < tamStr2 ; counter2 += 1){
    switch(str2[counter2]){
      case '1':
          resultStr2 += 'a';
          break;
        case '2':
          resultStr2 += 'e';
          break;
        case '3':
          resultStr2 += 'i';
          break;
        case '4':
          resultStr2 += 'o';
          break;
        case '5':
          resultStr2 += 'u';
          break;
        default:  
          resultStr2 += str2[counter2];
    } 
  }return resultStr2;

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
