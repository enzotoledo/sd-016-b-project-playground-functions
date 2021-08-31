// Desafio 10
function techList(textTen, myname) {
  if (textTen.length > 0) {
    let ordemtextTen = textTen.sort();
    let lista = [];
    for (let objeto of ordemtextTen) {
      lista.push({tech: objeto, name: myname})
    }
    return lista;
  } else {
    return 'Vazio!';
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
