// Desafio 10
function techList(techName, name) {
  let result = [];
  if (techName.length === 0) {
    return 'Vazio!';
  } else {
    for (let tech of techName.sort()) {
      resultado.push({ name, techName })
    }
    return result;
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
  } else if (number < 0 && number > 9) {
    return 'Não é possivel gerar um numero de telefone com esses valores';
  } else {
    return 'Não é possivel';
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
