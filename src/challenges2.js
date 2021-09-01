// Desafio 10
function criarObjeto(arrayTechs, nome) {
  let ordemArray = arrayTechs.sort();
  let conjuntoObj = [];

  for (let index = 0; index < ordemArray.length; index += 1) {
    conjuntoObj[index] = { tech: ordemArray[index], name: nome };
  }
  return conjuntoObj;
}

function techList(arrayTechs, name) {
  if (arrayTechs.length > 0) {
    console.log(criarObjeto(arrayTechs, name));
  } else {
    return 'Vazio!';
  }
}
//console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
