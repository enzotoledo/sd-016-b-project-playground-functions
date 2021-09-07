// Desafio 10
function techList(techArray, name) { 
  let resultado = [];

  techArray.sort();
  
  if (techArray.length === 0) {
    return "Vazio!"
  }

  for (let i = 0; i < techArray.length; i+=1) {
    resultado.push({
      tech:techArray[i],
      name: name
    });
  }
  return resultado;
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
