// Desafio 10
function techList(array, name) {
  array.sort();
  let result = 0;

  if (array.length > 0) {
    for (let tech in array) {
      array[tech] = {
        tech: array[tech],
        name: name,
      };
    }
    result = array;
  } else {
    result = 'Vazio!';
  }

  return result;
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
