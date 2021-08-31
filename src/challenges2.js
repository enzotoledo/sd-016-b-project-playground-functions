// Desafio 10
function techList(techs, name) {
  let arraySort = techs.sort();
  let arrayObjects = [];
  if (techs.length < 1) {
    return 'Vazio!';
  } else {
    for (let runner in techs) {
      arrayObjects.push({
        tech: techs[runner],
        name: name
      })
    }
    return arrayObjects;
  }
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
