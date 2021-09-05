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
function triangleCheck() {
  // seu código aqui
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
