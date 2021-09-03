// Desafio 10
function techList(array, name) {
  let objeto = {};
  if (array === []) {
    return 'Vazio!';
  }
  let newArray = array.sort();
  for (let i = 0; i < array.length; i += 1) {
    objeto[i] = { tech: newArray[i], name };
  }
  return Object.getOwnPropertyNames(objeto);
}

// Desafio 11
function generatePhoneNumber(array) {
  let number = [];
  let repeticoes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 9 || array[i] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    repeticoes[array[i]]++;
    number.push(array[i]);
  }
  for (let i = 0; i < repeticoes.length; i += 1) {
    if (repeticoes[i] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  console.log(repeticoes)
  let numberArrumado = `(${number[0].toString() + number[1].toString()}) ${number[2].toString() + number[3].toString() + number[4].toString() + number[5].toString() + number[6].toString()}-${number[7].toString() + number[8].toString() + number[9].toString() + number[10].toString()}`;
  return numberArrumado;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
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
