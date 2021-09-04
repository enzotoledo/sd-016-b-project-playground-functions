// Desafio 10
let resTechList = [];
function techList(techNames, name) {
  if (techNames.length === 0) {
    resTechList = 'Vazio!';
  }
  for (let tech of techNames.sort()) {
    resTechList.push({
      tech,
      name,
    });
  }
  return resTechList;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangleDone = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    triangleDone = true;
  }
  return triangleDone;
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
