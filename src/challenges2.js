// Desafio 10
function techList(strList, name) {
  // seu código aqui
  let result;
  let arrayList = strList.sort();
  let arrayStr = [];
  if (strList.length === 0){
    result = "Vazio!";
  }
  else {
    result = arrayStr;
  }
  for (let i = 0; i < arrayList.length; i += 1) {
    let element = arrayList[i];
    arrayStr.push(
    {
    tech: arrayList[i],
    name: name,
    }
    );
  }
  
  return result;
}
console.log(techList(['Jest', 'HTML', 'React', 'CSS', 'JavaScript'], 'Gabriel'));

// Desafio 11
function generatePhoneNumber(numArray) {
  // seu código aqui
  let contador = numArray[0]
  let numerosRepetidos = 0;

  //Verifica se o parâmetro tem um tamanho correto. 
  if (numArray.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  
  for (let i = 0; i < numArray.length; i+= 1) {
    
    //Contador de números repetidos.
    if (contador === numArray[i]) {
      contador = numArray[i]
      numerosRepetidos += 1;
    }
    //Verifica se os valores são corretos.
    if (numArray[i] > 9 || numArray[i] < 0 || numerosRepetidos >= 3) {
      return "não é possível gerar um número de telefone com esses valores."
    }
    
  }
  //Créditos á: MDN Web Docs - Template Strings. 
  return `(${numArray[0]}${numArray[1]}) ${numArray[2]}${numArray[3]}${numArray[4]}${numArray[5]}${numArray[6]}-${numArray[7]}${numArray[8]}${numArray[9]}${numArray[10]}${numArray[11]}`;

}
console.log(generatePhoneNumber([8, 2, 9, 8, 1, 2, 1, 7, 6, 1, 9]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true
  }
  else {
    return false
  }
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
