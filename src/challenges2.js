// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let technoList = [];
  let objectList = tech.sort();
  if (objectList.length === 0) {
    return 'Vazio!';
  }
  for (let x in objectList) {
    technoList.push({
      tech: objectList[x],
      name,
    });
  }
  return technoList;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  lineA = Math.abs(lineA);
  lineB = Math.abs(lineB);
  lineC = Math.abs(lineC);

  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }
  return true;
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
