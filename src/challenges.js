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
function concatName(string) {
  let result = string[string.length-1]+","+ string[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  points = (wins*3)+ties;
  return points;
}


// Desafio 6
function highestCount(numeros) {
  let arrayDosNumeros = numeros.split(",");
  let max = Math.max(...arrayDosNumeros)
  let contadorMaiorNumero = 0;
  for(let i=0; i<arrayDosNumeros.length;i++){
    if(arrayDosNumeros[i]== max){
      contadorMaiorNumero += 1;
    }
  } 
  return contadorMaiorNumero;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
 let distanciaCat1 = Math.abs(cat1-mouse);
 let distanciaCat2 = Math.abs(cat2-mouse);
  if(distanciaCat1>distanciaCat2) {
    return "cat1"; 
  }else if(distanciaCat2>distanciaCat1) {
    return "cat2";
  }else {
    return "os gatos trombam e o rato foge";
  } 
}

// Desafio 8
function fizzBuzz(array){
  let novaArray = [];
  for(let i=0; i<array.length; i++) {
    if(array[i]%3==0 && array[i]%5==0){
      novaArray[i] = "fizzbuzz";
    }else if(array[i]%3==0){
      novaArray[i] = "fizz";
    }else if(array[i]%5==0){
      novaArray[i] = "buzz";
    }else{
      novaArray[i] = "bug!";
    }
    
  }
  console.log(novaArray);
}
fizzBuzz ([2, 15, 7, 9, 45])

// Desafio 9
function encode(string) {
  for(i=0; i<string.length; i++){
    if(string[i] ==="a"){
      string = string.replace('a', '1');
    }else if(string[i] === "e"){
      string = string.replace('e', '2');
    }else if(string[i] === "i"){
      string = string.replace('i', '3');
    }else if(string[i] === "o"){
      string = string.replace('o', '4');
    }else if(string[i] === "u"){
      string = string.replace('u', '5');
    }
  }
  console.log(string)
}
encode("hi there!")

function decode(stringCodificada) {
  let string ='';
  for(i=0; i<stringCodificada.length; i++){
    if(stringCodificada[i] === 1){
      stringCodificada = stringCodificada.replace('1','a');
    }else if(stringCodificada[i] === 2){
      stringCodificada = stringCodificada.replace('2','e');
    }else if(stringCodificada[i] === 3){
      stringCodificada = stringCodificada.replace('3','i');
    }else if(stringCodificada[i] === 4){
      stringCodificada = stringCodificada.replace('4','o');
    }else if(stringCodificada[i] === 5){
      stringCodificada = stringCodificada.replace('5','u');
    }
  }
  string = stringCodificada;
  console.log(string);
}
decode("h3 th2r2!")


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
