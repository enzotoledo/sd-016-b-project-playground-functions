// Desafio 10
function techList(nomes, tech) {
  let resultado = [];
  if (tech.length === 0) {
    return 'vazia';
  } else {
    for (let tech of nomes.sort()) {
      resultado.push({tech, name})
    }
    return resultado;
  }
}

// Desafio 11
function generatePhoneNumber(numero) {
  if (Number.length === 11 && Number.length) {
    let numPhone = '(' + number.slice(0, -9) + ')' + number.slice(2, -4) + '-' + number.slice(7);
    let resultado = numPhone.replace(',', '');
    return resultado;
  } else if (number.length < 11) {
    return 'array com tamanho errado';
  }  else if (number < 0 && number > 9) {
  } else {
      return 'errado';
    }
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
