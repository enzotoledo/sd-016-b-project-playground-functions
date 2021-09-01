// Desafio 10
function techList(array1, name) {
  let objetoTecnologias = [];
  let arraySorted = array1.sort();
  if (arraySorted.length === 0){
    return "Vazio!"
  }else {
    for (let i in array1) {
      objetoTecnologias[i] = {
        "tech": array1[i],
        "name": name
      }
    }  
  }  
  return objetoTecnologias;
}

// para esse exercício busquei ajuda no Stackoverflow
// https://stackoverflow.com/questions/26624166/convert-integer-array-to-string-array-in-javascript/26624276
// Desafio 11
function generatePhoneNumber(numeros) {  
  if (verificarTamanhoNumero(numeros) === false) {
    return "Array com tamanho incorreto."
  } else {
  if (verificarNumeros(numeros) === true) {
      let ddd = numeros.slice(0,2).join("")
      let primeirosNumeros = numeros.slice(2,7).join("")
      let segundosNumeros = numeros.slice(7,11).join("")
      return ("(" + ddd + ") " + primeirosNumeros + "-" + segundosNumeros)
  } else {
    return "não é possível gerar um número de telefone com esses valores"
  }
  }
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
let listaNumeros = [-1, 2, 3, -14, 5, 6, 7, 8, 9, 0, 1];
let contador = 0;
for (let i = 0; i < listaNumeros.length; i += 1){
  if (listaNumeros[i] < 0 && listaNumeros[i] > 9) {
    contador += 1;
  }
}
if (contador > 0) {
  console.log("tem numero negativo")
} else {
  console.log("meh")
}
function verificarNumeros (listaNumeros) {
  let contador = 0
  for (let i in listaNumeros) {
    if ((listaNumeros[i] < 0) && (listaNumeros[i] > 9)) {
      contador += 1
    } 
    if (contador > 0) {
      return false
    } else {
      return true
    } 
    
  }
} 

function verificarTamanhoNumero (numeros) {
  if (numeros.length === 11) {
    return true;
  } else {
    return false;
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
