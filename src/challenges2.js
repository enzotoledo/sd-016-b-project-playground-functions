// Desafio 10
function techList(arr, nm) {
  const techArray = arr.sort();
  const finalArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    finalArray.push({ tech: techArray[i], name: nm });
  }

  if (arr.length <= 0) {
    return 'Vazio!';
  }
  return finalArray;
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
