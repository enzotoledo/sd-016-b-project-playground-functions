// Desafio 1
function compareTrue(value1,value2) {
  if(value1 && value2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return area;  
} 

// Desafio 3
function splitSentence(phrase) {
  splitPhrase = phrase.split(" ")
  return splitPhrase;  
}

// Desafio 4
function concatName(names) {
  return ((names[(names.length-1)] +", "+ names[0]));
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins*3)+ties)  
}

// Desafio 6
function highestCount(numbers) { 
  numbers = numbers.sort(function (a, b) {  return a - b;  });
  let highestNumber = numbers[numbers.length-1];
  let countAux = 0;
  let mostAppear = 0;
  for (let index = 0; index < numbers.length; index++) {  
    if(highestNumber === numbers[index]){
      countAux = countAux + 1;
    }        
  }
  if(mostAppear < countAux){
    mostAppear = countAux;
  }
  countAux = 0;
  return mostAppear;
}  


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = 0;
  let cat2Distance = 0;
  if(cat1 > mouse){
    for (let index = cat1; index >= mouse; index--) {
      cat1Distance = cat1Distance +1;  
    }
    cat1Distance = cat1Distance - mouse;  
  }
  if(cat2 > mouse){
    for (let index1 = cat2; index1 >= mouse; index1--) {
      cat2Distance = cat2Distance +1;  
    }
    cat2Distance = cat2Distance - mouse;  
  }
  if(cat1 < mouse){
    for (let index = cat1; index <= mouse; index++) {
      cat1Distance = cat1Distance +1;  
    }
    cat1Distance = cat1Distance - mouse;  
  }
  if(cat2 < mouse){
    for (let index1 = cat2; index1 <= mouse; index1++) {
      cat2Distance = cat2Distance +1;  
    }
    cat2Distance = cat2Distance - mouse;
  }
  if(cat1 === mouse){
    cat1Distance = 0;
  }
  if(cat2 === mouse){
    cat2Distance = 0;
  }
  if(cat1Distance < cat2Distance){
    return "cat1";
  } else if(cat1Distance === cat2Distance){
    return "os gatos trombam e o rato foge";
  } else{
    return "cat2"
  }

}
 
// Desafio 8
function fizzBuzz(numbers) {
  let number = 0;
  let string = [];  
  for (let index = 0; index < numbers.length; index++) { 
    number = numbers[index]
    if(number % 3 === 0 && number % 5 === 0){
       string.push('fizzBuzz');
    } else if(number % 3 === 0){
       string.push('fizz');
    } else if(number % 5 === 0){
       string.push('buzz');
    } else{
       string.push('bug!');
    }
    
  }   
  return string
}

// Desafio 9
function encode(string) {
  let codeVowel = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }  
  let splitString = string.split("");
  let stringAux = '';
  let encodedString ='';
    
  for (let index = 0; index < splitString.length; index++) {
    stringAux = splitString[index];
    for (let index1 in codeVowel) {      
      if(stringAux === index1){
        encodedString = encodedString + (codeVowel[index1]);
        stringAux = '';       
      }              
    }
    if (stringAux !== ''){
      encodedString = encodedString + (stringAux);
    }
  }
    
  return encodedString
}

function decode(string) {
  let codeVowel = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }  
  let splitString = string.split("");
  let stringAux = '';
  let encodedString = '';
    
  for (let index = 0; index < splitString.length; index++) {
    stringAux = splitString[index];       
    for (let index1 in codeVowel) {            
      if(stringAux == codeVowel[index1]){
        encodedString = encodedString + index1;         
        stringAux = '';                    
      }   
    }
    if (stringAux !== ''){
      encodedString = encodedString + (stringAux)
      stringAux = '';            
    }
    
  }  
      
  return encodedString;
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
