// Desafio 1
function compareTrue( ) {  
  
 
}

// Desafio 2
function calcArea(base, height) {
  calcArea = (base*height)/2;
  return calcArea;
}

// Desafio 3
function splitSentence() {
  let resultado = splitSentence.split ("",);

  return resultado;
}

// Desafio 4
function concatName(ultimoItem, primeiroItem) {
  let ultimoItem = concatName.length - 1;
  let primeiroItem = concatName[0];
  let resultado = concatName.concat(ultimoItem, primeiroItem);
  return resultado;  
}

// Desafio 5
function footballPoints(wins, ties) {
    
}

// Desafio 6
function highestCount() {
  let nMaior = Math.max (highestCount);
  for ( let i=0; i < nMaior.length; nMaior++)
  return nMaior++;
}

// Desafio 7
function catAndMouse(cat1, cat2) {
  if (cat2<cat1){
  console.log ("cat2")}
 else if ( cat1<cat2)
 {console.log ("cat1")}
 else{
  console.log ("os gatos trombam e o rato foge")}  
}

// Desafio 8
function fizzBuzz(n) {
      if(n % 3 == 0 && n % 5 == 0){
        console.log(n +" FizzBuzz");
    }else if(n % 5 == 0){
        console.log(n +" Buzz");
    }else if(n % 3 == 0){
        console.log(n +" Fizz");
    }
    n++;
}

// Desafio 9
function encode() {
  let numeros = encode.replace ("hi, there!", "h3, th2r2!");
  console.log (numeros);
  }
function decode() {
  let minusculas = decode.replace ("h3, th2r2!","hi, there!" );
  console.log (minusculas);
  
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
