// Desafio 10
function techList(array, name) {
  array.sort();
  let result = 0;

  if (array.length > 0) {
    for (let tech in array) {
      array[tech] = {
        tech: array[tech],
        name: name,
      };
    }
    result = array;
  } else {
    result = 'Vazio!';
  }

  return result;
}

// Desafio 11
function checkRepeatedNumbers(array) {
  let numbers = {};
  let validNumber = true;

  for (let index = 0; index < array.length; index += 1) {
    let number = array[index];
    if (numbers[number] === undefined) {
      numbers[number] = 1;
    } else {
      numbers[number] += 1;
    }
  }

  for (let number in numbers) {
    if (numbers[number] >= 3) {
      validNumber = false;
    }
  }
  return validNumber;
}
function arrayValues(array) {
  let validNumber = true;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      validNumber = false;
    }
  }

  return validNumber;
}

function generatePhoneNumber(array) {
  let result = 0;

  if (array.length !== 11) {
    result = 'Array com tamanho incorreto.'
  } else if (checkRepeatedNumbers(array) === false || arrayValues(array) === false) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    let DDD = '';
    let part1 = '';
    let part2 = '';
    for (let index = 0; index < 2; index += 1) {
      DDD += array[index];
    }
    for (let index = 2; index < 7; index += 1) {
      part1 += array[index];
    }
    for (let index = 7; index < array.length; index += 1) {
      part2 += array[index];
    }
    
    result = `(${DDD}) ${part1}-${part2}`;
  }

  return result;
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
