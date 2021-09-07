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

// Desafio 12
function testLines(linA, linB, linC) {
  let test = false
  if ((linB + linC) > linA && (Math.abs(linB - linC) < linA)) {
    test = true
  } return test 
}
function triangleCheck(lineA, lineB, lineC) {
let result = 0
    if (testLines(lineA, lineB, lineC) == true) {
      if (testLines(lineC, lineA, lineB) == true) {
        if (testLines(lineB, lineC, lineA) == true) {
        result = true
        } else {
        result = false
        }  
        } else {
        result = false
      }
    } else {
    result = false
  }return result
}

console.log(triangleCheck(10, 14, 8));

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
