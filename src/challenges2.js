// Desafio 10
function techList(array, name){
  // seu código aqui
  let interesse = [];
  let listaOrdenada = array.sort();
  if(listaOrdenada.length === 0){
    return 'Vazio!'
  }else{
    for (let i = 0; i < array.length; i++) {
      interesse[i] = {
        tech: listaOrdenada[i],
        name
      }
    }
  }
  
  return interesse
}

// Desafio 11
function generatePhoneNumber(arr) {
  // seu código aqui
  if(!(arr.length === 11)){
    return 'Array com tamanho incorreto.'
  }else if(verificaTamanho(arr) || veificaRepeticao(arr)){
    return 'não é possível gerar um número de telefone com esses valores'
  }else{
    return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`
  }
}

function verificaTamanho(arr) {
  for(let i of arr)
  if(i < 0 || i > 9){
    return true
  }  
}

function veificaRepeticao(arr) {
  for (let x of arr){
    let cont = 0;
    for (let i of arr) {
      if (x === i){
        cont++;
      }
      if(cont > 2){
        return true
      }
  }
  }
  
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let arr = [lineA, lineB, lineC]
  if(lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)){
    return true
  }else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)){
    return true
  }else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)){
    return true
  }else{
    return false
  }
}

// Desafio 13
function hydrate(str) {
  // seu código aqui
  let arrNumeros = str.match(/\d+/g).map(Number);
  let aux = 0;
  for (let i of arrNumeros){
    aux += i
  }
  if(aux > 1){
    return `${aux} copos de água`
  }else{
    return `1 copo de água`
  }
  
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};






const counts = {};
const sampleArray = ['a', 'a', 'b', 'c'];
sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)