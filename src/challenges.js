// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true; 
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,heigth) {
  let area = (base*heigth)/2 ;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayDeStrings) {
  lastName = arrayDeStrings[arrayDeStrings.length-1];
  firstName = arrayDeStrings[0];
  return  lastName + ',' + firstName;
}


// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3)+ties;
}


// Desafio 6
function highestCount(numeros) {
  let max = Math.max(...numeros)
  let contadorMaiorNumero = 0;
  for(let i=0; i<numeros.length; i++) {
    if(numeros[i] == max){
      contadorMaiorNumero += 1;
    }
  } 
  return contadorMaiorNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
 let distanciaCat1 = Math.abs(cat1 - mouse);
 let distanciaCat2 = Math.abs(cat2 - mouse);
  if(distanciaCat1 > distanciaCat2) {
    return "cat2"; 
  }else if(distanciaCat2 > distanciaCat1) {
    return "cat1";
  }else {
    return "os gatos trombam e o rato foge";
  } 
}


// Desafio 8
function fizzBuzz(array) {
  let novaArray = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 3 === 0 && array[i] % 5 === 0) {
      novaArray.push('fizzbuzz');
    }else if(array[i] % 3 === 0) {
      novaArray.push('fizz');
    }else if(array[i] % 5 ===0) {
      novaArray.push('buzz');
    }else{
      novaArray.push('bug!');
    }
  }
  return novaArray;
}

// Desafio 9
function encode(string) {
  for(i=0; i<string.length; i++){
    if(string[i] =="a"){
      string = string.replace('a', '1');
    }else if(string[i] == "e"){
      string = string.replace('e', '2');
    }else if(string[i] == "i"){
      string = string.replace('i', '3');
    }else if(string[i] == "o"){
      string = string.replace('o', '4');
    }else if(string[i] == "u"){
      string = string.replace('u', '5');
    }
  }
  return string;
}

function decode(stringCodificada) {
  let decodificada ='';
  for(i=0; i < stringCodificada.length; i++) {
    if(stringCodificada[i] == 1){
      stringCodificada = stringCodificada.replace('1','a');
    }else if(stringCodificada[i] == 2){
      stringCodificada = stringCodificada.replace('2','e');
    }else if(stringCodificada[i] == 3){
      stringCodificada = stringCodificada.replace('3','i');
    }else if(stringCodificada[i] == 4){
      stringCodificada = stringCodificada.replace('4','o');
    }else if(stringCodificada[i] == 5){
      stringCodificada = stringCodificada.replace('5','u');
    }
  }
  decodificada = stringCodificada;
  return decodificada;
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
