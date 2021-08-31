// Desafio 1
function compareTrue(a,b) {
if((a==true) && (b==true)){
  return true;
}
  else {
  return false;
  }
}

// Desafio 2
function calcArea(base,height) {
let resultado = [];
resultado = (base * height)/2;
return resultado;
}
// Desafio 3
function splitSentence(string) {
  string = string.split(" ");
  return string
}

// Desafio 4
function concatName(array) {
array = array[array.length-1] + ", " + array[0];
return array
}

// Desafio 5
function footballPoints(wins,ties) {
let pontos= 0;
wins = wins * 3;
ties = ties * 1;
pontos = ties + wins;
return pontos;
}

// Desafio 6
function highestCount(array) {
let numeroMaior = 0;
let quantidade = 0;
for(let index=0 ;index<array.length ; index+=1){
  if(numeroMaior<array[index]){
    numeroMaior = array[index];
}
}
  for(let indice=0 ; indice<array.length; indice+=1){
    if(numeroMaior === array[indice]){
      quantidade +=1;
    }
  }
  return quantidade;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let resposta = [];
  if(Math.abs(mouse-cat1)<Math.abs(mouse-cat2)){
    resposta='cat1';
  }
  else if (Math.abs(mouse-cat2)<Math.abs(mouse-cat1)){
    resposta='cat2';
  }
  else{
    resposta='os gatos trombam e o rato foge';
  }
  return resposta;
}

// Desafio 8
function fizzBuzz(a) {
let resultado = [];
for (let index = 0; index < a.length; index+=1){
  if((a[index]%3===0) && (a[index]%5===0)){
    resultado.push("fizzBuzz");
  }
  else if(a[index]%3===0){
  resultado.push("fizz");
  }
  else if(a[index]%5===0){
    resultado.push("buzz");
  }
  else {
    resultado.push("bug!");
  }
}
  return resultado;
}
// Desafio 9
function encode(a) {
a = a.split("");
for (let index=0 ; index<a.length ; index+=1){
  if(a[index]==="a"){
    a[index]= "1";
  }
  else if (a[index]==="e"){
    a[index]= "2";
  }
  else if(a[index]==="i"){
    a[index]= "3";
  }
  else if (a[index]==="o"){
    a[index]= "4";
  }
  else if (a[index]==="u"){
    a[index]="5";
  }
}
  a = a.join("");
  return a;
}

function decode(a) {
  a = a.split("");
  for(let index=0 ; index<a.length ; index+=1){
    if(a[index]==="1"){
      a[index]="a";
    }
    else if(a[index]==="2"){
      a[index]="e";
    }
    else if(a[index]==="3"){
      a[index]="i";
    }
    else if(a[index]==="4"){
      a[index]="o";
    }
    else if(a[index]==="5"){
      a[index]="u";
    }
  }
  a = a.join("");
  return a;
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
