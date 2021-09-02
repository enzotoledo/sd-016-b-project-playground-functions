// Desafio 10
function techList(technologies, name) {
  let technologiesList = technologies.sort();
  let objectsList = [];

  if (technologiesList.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < technologiesList.length; index += 1) {
    objectsList[index] = {
      tech: technologiesList[index],
      name,
    };
  }
  return objectsList;
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
