// Desafio 10
function techList(arr, name) {
  let array = [];
  for (let i of arr.sort()) {
    array.push({ tech: i, name });
  }
  if (array.length === 0) return 'Vazio!';
  return array;
}

// Desafio 11
function menorPhoneMaior(i) {
  if ((i < 0) || (i > 9)) return true;
}

function numberPhoneRepeat(i, a) {
  let count = 0;
  for (let x of a) {
    if (x === i) count += 1;
  }
  if (count >= 3) return true;
}

function generatePhoneNumber(a) {
  let msg = 'não é possível gerar um número de telefone com esses valores';
  if (a.length !== 11) return 'Array com tamanho incorreto.';
  for (let i of a) {
    if (menorPhoneMaior(i) || numberPhoneRepeat(i, a)) return msg;
  }
  return `(${a[0]}${a[1]}) ${a[2]}${a[3]}${a[4]}${a[5]}${a[6]}-${a[7]}${a[8]}${a[9]}${a[10]}`;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC))) return true;
  return false;
}

// Desafio 13
function hydrate(arr) {
  let array = arr.match(/\d+/g).map(Number); // dica https://stackoverflow.com/questions/48343478/what-does-mapnumber-do-here
  let count = 0;
  for (let i of array) {
    count += i;
  }
  if (count === 1) return '1 copo de água';
  if (count > 1) return `${count} copos de água`;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
