// Desafio 10
function techList(nomes, tecnoName) {
  let resultado = [];
  if (tech.length === 0) {
    return 'Vazio!';
  } else {
    for (let tech of nomes.sort()) {
      resultado.push({ tech, tecnoName })
    }
    return resultado;
  }
}

// Desafio 11
function generatePhoneNumber(number) {
  if (number.length === 11 && number.length) {
    let numPhone = '(' + number.slice(0, -9) + ')' + number.slice(2, -4) + '-' + number.slice(7);
    let resultado = numPhone.replaceAll(',', '');
    return resultado;
  } else if (number.length < 11) {
    return 'Array com tamanho incorreto';
  }  else if (number < 0 && number > 9) {
  } else {
      return 'Não é possivel gerar um numero de telefone com esses valores';
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
