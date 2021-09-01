// Desafio 10
function techList(arr, name) {
  arr.sort()
  let obj = []
  if (arr == false) {
    return "Vazio!"
  } else {
    for (let index = 0; index < arr.length; index += 1) {
      obj.push({tech: arr[index], name: name})
    } return obj
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
