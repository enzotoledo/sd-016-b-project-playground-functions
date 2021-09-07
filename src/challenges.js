// Desafio 1
function compareTrue(vauleA, vauleB) {
  if ((vauleA === true) && (vauleB === true)) {
  return true;
}  
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return (sentence.split(" "));
}

// Desafio 4
function concatName(names) {
  return (names[names.length-1] +', ' + (names[0]));
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(numbers) {
  let counter = 0;
  let higthNumber = Math.max(...numbers);
  console.log(higthNumber);

  for (let index = 0; index < numbers.length; index+=1) {
   if (higthNumber === numbers[index]) {
     counter +=1;
   }
 }
 return counter;
}
/*let higthNumber = [0];
let counter = 0;

for (let index = 0; index < numbers.length; index +=1) {
 if (numbers[index] > higthNumber) {
      higthNumer = numbers[index];
      counter = 0;
    }

 if (numbers[index] === higthNumber) {
      counter += 1;
    }
 }
return counter;*/



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } 
  else if(Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let mensager = []
  for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index]%3 === 0 && numbers[index]%5 === 0) {
      mensager.push ('fizzBuzz');
    } else if (numbers[index]%5 === 0) {
      mensager.push('buzz');
    } else if(numbers[index]%3 === 0) {
      mensager.push('fizz');
    }  
      else mensager.push ('bug!');
  }
  return mensager   
}

//if elseesafio 9
function encode(msg) {
 
 msg = msg.replace(/[a]/g, '1');
 msg = msg.replace(/[e]/g, '2');
 msg = msg.replace(/[i]/g, '3');
 msg = msg.replace(/[o]/g, '4');
 msg= msg.replace(/[u]/g, '5');
 return msg;
}
// Desafio concluido com dicas do Luiz Wanderson.

function decode(msg) {

  msg = msg.replace(/[1]/g, 'a');
  msg = msg.replace(/[2]/g, 'e');
  msg = msg.replace(/[3]/g, 'i');
  msg = msg.replace(/[4]/g, 'o');
  msg = msg.replace(/[5]/g, 'u');
 return msg;
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
