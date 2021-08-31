// Desafio 10
function techList(array, name) {
  const result = []

  if (array.length == 0)
    return "Vazio!"

  array.sort()

  for (let value of array) {
    result.push({ tech: value, name: name })
  }

  return result
}

// Desafio 11
function isValidNumber(repeatObject, number) {
  if (number < 0) return false
  if (number > 9) return false

  if (!repeatObject[number])
    repeatObject[number] = 0

  repeatObject[number] += 1

  if (repeatObject[number] >= 3) return false

  return true
}

function generatePhoneNumber(array) {
  if (array.length != 11)
    return "Array com tamanho incorreto."

  const repeated = {}

  let result = "("

  for (let key = 0; key < 2; key++) {
    if (!isValidNumber(repeated, array[key])) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    result += array[key]
  }

  result += ") "

  for (let key = 2; key <= 6; key++) {
    if (!isValidNumber(repeated, array[key])) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    result += array[key]
  }

  result += "-"

  for (let key = 7; key < 11; key++) {
    if (!isValidNumber(repeated, array[key])) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    result += array[key]
  }

  return result
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // nesse caso, cada chave será comparada com seus valores
  const allChecks = {
    [lineA]: [lineB, lineC],
    [lineB]: [lineA, lineC],
    [lineC]: [lineA, lineB],
  }

  for (let key in allChecks) {
    const value = allChecks[key]
    if (key > value[0] + value[1]) {
      return false
    } if (key < Math.abs(value[0] - value[1])) {
      return false
    }
  }

  return true
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
