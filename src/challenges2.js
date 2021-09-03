// Desafio 10
function techList(array, name) {
  // seu código aqui
  let lista = [];
  let myArray = array.sort();

  for (let i = 0; i < myArray.length; i += 1) {
    lista.push(
      {
        "tech": myArray[i],
        "name": name
      }
    )
  }
  if (lista.length === 0) {
    return "Vazio!"
  }else{
    return lista;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let error = 0
  let numStructure = ['(','','',')',' ','','','','','','-','','','','',]

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.'
  }

  function errorMsg() {
    return 'não é possível gerar um número de telefone com esses valores'
  }

  for (const iterator of array) {
    let count = 0
    if (iterator < 0 || iterator > 9) {
      error += 1
    }
    for (let i = 0; i < array.length; i += 1) {
      if (iterator === array[i]) {
        count += 1
      }
      if (count >= 3) {
        error += 1
      }
    }
  }

  function number(param) {
    for (const iterator of param) {
      for (let i = 0; i < numStructure.length; i += 1) {
        if (numStructure[i] === '') {
          numStructure[i] = iterator
          break
        }
      }
    }
    return numStructure
  }

  if (error > 0) {
    return errorMsg()
  }

  return number(array).join('')
}

// Desafio 12
function isHigher(a, b, c) {
  if (a < b + c && b < a + c && c < a + b) {
    return true;
  }
}

function diference(a, b) {
  return Math.abs(a - b);
}

function isLower(a, b, c) {
  if (a > diference(b, c) && b > diference(a, c) && c > diference(a, b)) {
    return true;
  }
}

function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let high = isHigher(lineA, lineB, lineC);
  let low = isLower(lineA, lineB, lineC);
  let result = high === true && low === true

  return result
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
