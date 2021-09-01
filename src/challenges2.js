// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = false;
  if ((lineB + lineC) > lineA && lineA > Math.abs(lineB - lineC)) {
    isTriangle = true;
  }
  if ((lineA + lineC) > lineB && lineB > Math.abs(lineA - lineC)) {
    isTriangle = true;
  }
  if ((lineA + lineB) > lineC && lineC > Math.abs(lineA - lineB)) {
    isTriangle = true;
  }
  return isTriangle;
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
