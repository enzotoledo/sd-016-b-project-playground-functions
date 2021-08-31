// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(s) {
  return s.split(' ');
}

// Desafio 4
function concatName(a) {
  // return a[a.length - 1] + ', ' + a[0]; //Lint reclamou
  return `${a[a.length - 1]}, ${a[0]}`; //  https://developer.school/javascript-es6-string-concatenation-with-template-literals/
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// O maior da array
function oMaiorDaArray(a) {
  let vencedor = a[0];
  for (let i of a) if (i > vencedor) vencedor = i;
  return vencedor;
}

// Quantidade de um valor numa array
function quantasVezesAparece(v, a) {
  let quantidade = 0;
  for (let j of a) if (j === v) quantidade += 1;
  return quantidade;
}

// Desafio 6
function highestCount(a) {
  return quantasVezesAparece(oMaiorDaArray(a), a);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);
  if (cat1 > cat2) return 'cat2';
  if (cat2 > cat1) return 'cat1';
  return 'os gatos trombam e o rato foge';
}

// Divisível por 3
function divisivelPor3(n) {
  if ((n % 3) === 0) return true;
  return false;
}

// Divisível por 5
function divisivelPor5(n) {
  if ((n % 5) === 0) return true;
  return false;
}

// Define o resultado fizzBuzz
function fizzOuBuzz(v) {
  if (divisivelPor3(v) && divisivelPor5(v)) return 'fizzBuzz';
  if (divisivelPor3(v)) return 'fizz';
  if (divisivelPor5(v)) return 'buzz';
  return 'bug!';
}

// Desafio 8
function fizzBuzz(arr) {
  let a = [];
  for (let i of arr) {
    a.push(fizzOuBuzz(i));
  }
  return a;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
