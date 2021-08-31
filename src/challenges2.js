// Desafio 10
function techList(list, name) {
  let meuArray = list.sort();
  let arrayList = [];
  let result;

  for (let index = 0; index < meuArray.length; index += 1) {
    arrayList.push(
      {
        tech: meuArray[index],
        name: name,
      },
    );
  }

  if (arrayList.length === 0) {
    result = 'Vazio!';
  } else {
    result = arrayList;
  }

  return result;
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
