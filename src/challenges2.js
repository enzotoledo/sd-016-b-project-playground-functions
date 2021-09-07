// Desafio 10
function techList() {
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) && lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) && lineC < lineB + lineA && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}
console.log(triangleCheck(25, 14, 8));
// Desafio 13
function hydrate(drinks) {
  let numeros = drinks.match(/\d+/g).map(Number);
  let sum = 0;
  for (let index in numeros) {
    sum += numeros[index];
  }
  let sumtotal = sum;
  if (sumtotal > 1) {
    return `${sumtotal} copos de água`;
  }

  return `${sumtotal} copo de água`;
}
// Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match 
console.log(hydrate('1 cerveja 2'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
