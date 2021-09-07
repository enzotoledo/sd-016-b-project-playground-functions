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
function generatePhoneNumber() {
  // seu código aqui
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
