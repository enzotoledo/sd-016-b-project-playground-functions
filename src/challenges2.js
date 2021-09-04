// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
// eslint-disable-next-line complexity
function triangleCheck(lineA, lineB, lineC) {
  let A = Math.abs(lineA - lineB);
  let B = Math.abs(lineB - lineC);
  let C = Math.abs(lineC - lineA);
  // eslint-disable-next-line sonarjs/prefer-single-boolean-return
  // eslint-disable-next-line no-undef
  if ((B < lineA && lineA < (lineB + lineC)) && (C < lineB && lineB < (lineC + lineA)) && (A < lineC && lineC < (lineA + lineB))) {
    return true;
  } return false;
}
console.log(triangleCheck(1, 1, 9));
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
