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
function generatePhoneNumber(arr) {
  let recorrentNumbers = []
  if (arr.length != 11) {
    return "Array com tamanho incorreto."
  } else {
    for (const key in arr) {
      let value = arr[key]
      let absValue = Math.abs(value)
      recorrentNumbers = []
      if (value > 9) {
        return "não é possível gerar um número de telefone com esses valores"
      } else if (absValue != value) {
        return "não é possível gerar um número de telefone com esses valores"
      } else {
        for (const key2 in arr) {
          var atualValue = arr[key2]
          if (value == atualValue) {
            recorrentNumbers.push(atualValue)
          } if (recorrentNumbers.length >= 3) {
            return "não é possível gerar um número de telefone com esses valores"
            }
          }
        }
    }
  } return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`
}


console.log(generatePhoneNumber([0, 2, 3, 4, 5, 8, 7, 9, 1, 0, 7]));

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
