// Desafio 10
function techList(array, name) {
  // seu código aqui
  let listObj = [];
  let list = array.sort();
  if (!(array.length === 0)) {
    for (let i in list) {
      listObj.push({
        tech: list[i],
        name,
      });
    }
    return listObj;
  } else {
    return "Vazio!";
  }
}

// Desafio 11
function generatePhoneNumber(value) {
  // seu código aqui
  unk = "não é possível gerar um número de telefone com esses valores";
  if (value.length === 11) {
    for (let k of value) {
      let r = 0;
      if (k < 0 || k > 9) {
        return unk
      }
      for (let j of value ){
        if (k === j)
          r++;
      }
      if (r >= 3) {
        return unk;
      }

    }

    value.splice(7, 0, '-'); 
    value.splice(0, 0, '(');
    value.splice(3, 0, ')');
    value.splice(4, 0, ' ');
    return value.join("");
  } else {
    return "Array com tamanho incorreto.";
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
