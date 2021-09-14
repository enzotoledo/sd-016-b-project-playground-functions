// Desafio 1
function compareTrue(x, y) {
  // seu código aqui
  let boolean = false;
  if (x == true & y == true)
    boolean = true;
  return boolean
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(" ")
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[array.length - 1] + ", " + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsVal = 3;
  let tiesVal = 1;

  return (wins * winsVal) + (ties * tiesVal)

}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiorValor;
  let cont = 0;
  
  maiorValor = Math.max.apply(Math, array);

  for(let i = 0; i < array.length; i++){
    if(array[i] === maiorValor){
      cont += 1;
    }
  }
  return cont
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let disCat1 = Math.abs(mouse - cat1);
  let disCat2 = Math.abs(mouse - cat2);
  if(disCat1 === disCat2){
    return "os gatos trombam e o rato foge"
  }else if(disCat1 < disCat2){
    return "cat1"
  }else{
    return "cat2"
  }
}
console.log(catAndMouse(10, 4, 22));

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let resp = [];
  for (let i of array) {
    if (i%3===0 && i%5 === 0){
      resp.push('fizzBuzz')
    }else if(i%3 ===0){
      resp.push('fizz') 
    }else if(i%5 === 0){
      resp.push('buzz')
    }else{
      resp.push('bug!')
    }
  }
  return resp
}
console.log(fizzBuzz([9, 25]));
// Desafio 9
function encode(string) {
  // seu código aqui
  let letra = [/a/g, /e/g, /i/g, /o/g, /u/g]
  let cod = ['1', '2', '3', '4', '5']
  let novaString;
  for(let i = 0; i < letra.length; i++){
    let re = letra[i];
    let sub = cod[i];
    novaString = string.replace(re,sub);
    string = novaString;
  }

  
  return string
}

function decode(string) {
  // seu código aqui
  let letra = ['a','e', 'i', 'o', 'u']
  let cod = [/1/g, /2/g, /3/g, /4/g, /5/g]
  let novaString;
  for(let i = 0; i < letra.length; i++){
    let re = cod[i];
    let sub = letra[i];
    novaString = string.replace(re,sub);
    string = novaString;
  }

  
  return string
}
console.log(decode('h3 th2r2!'));
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
