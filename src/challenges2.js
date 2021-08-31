// Desafio 10
function techList(array, name) {
if ( array[0] === undefined){
  return 'Vazio!';
} else {
  let arraySort = array.sort();
  let answer = [
    {
      tech: arraySort[0],
      name: name
    },
    {
      tech: arraySort[1],
      name: name
    },
    {
      tech: arraySort[2],
      name: name
    },
    {
      tech: arraySort[3],
      name: name
    },
    {
      tech: arraySort[4],
      name: name
    },
  ];
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
