// Desafio 1
function compareTrue(value1, value2) {
  if(value1 == true && value2 == true){
    return true;
  }
  else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splitString = string.split(" ", string.length);
  //" " define que o que irá separar serão os espaços, string.length define que será feita em toda a string.
  return splitString;
}

// Desafio 4
function concatName(array) {
  return array[array.length-1 ]+ ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3*wins) + ties;
  return points
}

// Desafio 6
function highestCount(array) {
  let highestNumber = -Infinity;
  let counter = 0;
  for(i=0; i<array.length; i++){
    if(array[i]>highestNumber){
      highestNumber = array[i];
    }
  }
  for (j=0; j<array.length; j++){
    if(array[j] === highestNumber){
      counter++
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1distance = Math.abs(mouse-cat1);
  let cat2distance = Math.abs(mouse-cat2);
  if(cat1distance == cat2distance){
    return "os gatos trombam e o rato foge"
  }
  else if(cat1distance>cat2distance){
    return "cat2"
  }
  else if(cat1distance<cat2distance){
    return "cat1"
  }
}

// Desafio 8
function fizzBuzz(array) {
  for(i = 0; i < array.length; i++){
    if(array[i] % 3 == 0 && array [i] % 5 == 0){
      array[i] = "fizzBuzz";
    }
    else if(array[i] % 3 == 0 && array [i] % 5 != 0){
      array[i] = "fizz";
    }
    else if(array[i] % 3 != 0 && array [i] % 5 == 0){
      array[i] = "buzz";
    }
    else{
      array[i] = "bug!";
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let newstring = string.split("");
  
  for(i=0; i<newstring.length; i++){
    if(newstring[i] == "a"){
      newstring[i] = "1";
    }
    if(newstring[i] == "e"){
      newstring[i] = "2";
    }
    if(newstring[i] == "i"){
      newstring[i] = "3";
    }
    if(newstring[i] == "o"){
      newstring[i] = "4";
    }
    if(newstring[i] == "u"){
      newstring[i] = "5";
    }
    }
    return newstring.join("")
  }
//tanto split quanto join foram vistos em aula, porém não me lembrava. Para a resolução desse exercicio encontrei essas formulas no developer.mozilla. seguem os links: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join e https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function decode(string) {
  let newstring = string.split("");
  
  for(i=0; i<newstring.length; i++){
    if(newstring[i] == "1"){
      newstring[i] = "a";
    }
    if(newstring[i] == "2"){
      newstring[i] = "e";
    }
    if(newstring[i] == "3"){
      newstring[i] = "i";
    }
    if(newstring[i] == "4"){
      newstring[i] = "o";
    }
    if(newstring[i] == "5"){
      newstring[i] = "u";
    }
    }
    return newstring.join("")
}
console.log(decode("h3 th2r2!"))
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
