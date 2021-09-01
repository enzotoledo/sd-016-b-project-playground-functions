// Desafio 10
function techList(list, name) {
  let meuArray = list.sort();
  let arrayList = [];
  let result;

  for (let index = 0; index < meuArray.length; index += 1) {
    arrayList.push(
      {
        tech: meuArray[index],
        name: name,
      },
    );
  }

  if (arrayList.length === 0) {
    result = 'Vazio!';
  } else {
    result = arrayList;
  }

  return result;
}

function verificaMaxMin(numbers) {
  for (let number of numbers) {
    if ((number < 0) || (number > 9)) {
      return true;
    }
  }
  return false;
}

function verificaRepeticao(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    let count = 0;
    for (let segundoIndex = index; segundoIndex < numbers.length; segundoIndex += 1) {
      if (numbers[index] === numbers[segundoIndex]) {
        count += 1;
      }
    }
    if (count >= 3) {
      return true;
    }
  }
  return false;
}

function mascaraTelefone(numbers) {
  let phone = `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;

  return phone;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let retorno;
  if (numbers.length !== 11) {
    retorno = 'Array com tamanho incorreto.';
  } else if ((verificaMaxMin(numbers)) || (verificaRepeticao(numbers))) {
    retorno = 'não é possível gerar um número de telefone com esses valores';
  } else {
    retorno = mascaraTelefone(numbers);
  }

  return retorno;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < (lineB + lineC)) && (lineA > (Math.abs(lineB - lineC)))) {
    return true;
  } else if ((lineB < (lineA + lineC)) && (lineB > (Math.abs(lineA - lineC)))) {
    return true;
  } else if ((lineC < (lineB + lineA)) && (lineC > (Math.abs(lineB - lineA)))) {
    return true;
  } else {
    return false;
  }
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
