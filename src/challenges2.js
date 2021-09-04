// Desafio 10
function techList(array, nome) {
  array.sort();
  let techs = [];
  if (array.length <= 0) {
    return 'Vazio!';
  }
  for (let value of array) {
    techs.push({ tech: value, name: nome });
  }
  return techs;
}

// Desafio 11
function generatePhoneNumber() {

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let A = Math.abs(lineA - lineB);
  let B = Math.abs(A - lineC);
  let C = Math.max.apply(null, [lineA, lineB, lineC]);
  if (((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineA + lineB)) && B < C) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
