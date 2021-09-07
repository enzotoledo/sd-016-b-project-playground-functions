// Desafio 10
function techList(technologies, name) {
  let technologiesList = technologies.sort();
  let objectsList = [];

  if (technologiesList.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < technologiesList.length; index += 1) {
    objectsList[index] = {
      tech: technologiesList[index],
      name,
    };
  }
  console.log(objectsList);
  return objectsList;

}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"],'Wellington')

// Desafio 11
function generatePhoneNumber(arr) {
  let Numbers = []
  if (arr.length != 11) {
    return "Array com tamanho incorreto."
  } else {
    for (const chave in arr) {
      let value = arr[chave]
      let valorAbs = Math.abs(value)
      Numbers = []
      if (value > 9) {
        return "não é possível gerar um número de telefone com esses valores"
      } else if (valorAbs != value) {
        return "não é possível gerar um número de telefone com esses valores"
      } else {
        for (const chave2 in arr) {
          var valorAtualy = arr[chave2]
          if (value == valorAtualy) {
            Numbers.push(valorAtualy)
          } if (Numbers.length >= 3) {
            return "não é possível gerar um número de telefone com esses valores"
            }
          }
        }
    }
  } return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`
}


console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(linea,lineb,linec){
  let vlAbsolut = (lineb - linec);
  vlAbsolut = Math.abs(vlAbsolut);
    if(linea < (lineb + linec) && linea > vlAbsolut){
      console.log('true');
      return true
    }else{
      console.log('false')
      return false
    }

  }

triangleCheck(10,14,8)

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
