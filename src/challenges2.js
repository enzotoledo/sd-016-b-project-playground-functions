// Desafio 10
function techList(array, name) {
  if ( array[0] === undefined) {
  return 'Vazio!';
  } else {
  let arraySort = array.sort();
  let answer = [];
  let obj = {};
  for (let i = 0; i < arraySort.length; i +=1) {
    obj = {
      tech: arraySort[i],
      name: name
    }
    answer.push(obj);
  }
return answer;
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
