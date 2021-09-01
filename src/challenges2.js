// Desafio 10
function techList(learn, name) {
  // seu código aqui
  learn = learn.sort();
  let array = [];
  if (learn.length === 0) {
    return "Vazio!";
  }
  for (i=0; i < learn.length; i += 1) {
  let NomeTech = {
    tech: learn[i],
    name: name
  } ;
  array.push(NomeTech);
}
  return array;
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
