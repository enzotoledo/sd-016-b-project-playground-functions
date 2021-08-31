// Desafio 10
function techList(arrayTechs, name) {
  let arrayObjects = [];
  let nameParameter = name;
  arrayTechs.sort();
  if (arrayTechs.length === 0) {
    arrayObjects = 'Vazio!';
  } else {
    for (let index = 0; index < arrayTechs.length; index += 1) {
      arrayObjects.push({
        tech: arrayTechs[index],
        name: nameParameter,
      });
    }
  }
  return arrayObjects;
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
