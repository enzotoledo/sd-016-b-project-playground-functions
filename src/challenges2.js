// Desafio 10
function techList(arrey, name) {
  let a = arrey;
  let object = {};
  let list = [];
  for (let tech of a.sort()) {
    object.tech = tech;
    object.name = name;
    list.push(object);
  }
  if (list === []) {
    console.log('Vazio!');
  } else {
    console.log(list);
  }
}

techList([], 'Rafael');
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
