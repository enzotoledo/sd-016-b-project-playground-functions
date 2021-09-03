// Desafio 10
function techList(array, name) {
  let newArray = [];
  if (array.length > 0) {
    array.sort();
    for (let i in array) {
      if (Object.prototype.hasOwnProperty.call(array, i)) {
        newArray.push({
          tech: array[i],
          name,
        });
      }
    }
    return newArray;
  }
  return 'Vazio!';
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
