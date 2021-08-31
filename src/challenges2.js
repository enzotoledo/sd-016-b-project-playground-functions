// Desafio 10
function techList(arrayTech, name) {
  let arrayTech2 = [];
  if (arrayTech.length > 0) {
    arrayTech.sort();
    for (let index of arrayTech) {
      arrayTech2.push({
        tech: index,
        name: name
      });
    }
    console.log(arrayTech2);
    return arrayTech2;
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
