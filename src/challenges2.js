// Desafio 10
function techList(array, name) {  
  let objectArray = [""];
  for(i=0; i < array.length; i++){
    let myObject = {
      tech: "NomeTech",
      name: name,
    }
    myObject.tech = array[i];
    myObject.name = name;
    objectArray.push(myObject)
  }
  return objectArray;
}

// Desafio 11
function generatePhoneNumber(digits) {
  if(digits.length != 11){
    return "Array com tamanho incorreto.";
  }
  else if(digits.length == 11){
    for(i=0; i<digits.length; i++){
    let counter = 0;
    if (digits[i]< 0){
      return "não é possível gerar um número de telefone com esses valores";
    }
    else{
      for(j=0; j<digits.length; j++){
      if(digits[i] == digits[j]){
        counter++
        if(counter > 2){
          return "não é possível gerar um número de telefone com esses valores";
            }
          }
        }
      }
    }
  }
digits[0] = "(" + digits[0];
digits[1] = digits[1] +") "
digits[6] = digits[6] + "-"
return digits.join("");
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

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
