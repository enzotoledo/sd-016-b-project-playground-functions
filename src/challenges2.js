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
  let result;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    result = true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    result = true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    result = true;
  } else {
    result = false;
  }
  return result;
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
