// Desafio 10
function techList(array, name) {
  array.sort();
  if(array.length !== 0){
    let objectArray = [];
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
else{
  return "Vazio!"
}
}
console.log((techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")))
// Desafio 11
function generatePhoneNumber(digits) {
  if(digits.length != 11){
    return "Array com tamanho incorreto.";
  }
  else if(digits.length == 11){
    for(i=0; i<digits.length; i++){
    let counter = 0;
    if (digits[i]< 0 || digits[i]>9){
      return "não é possível gerar um número de telefone com esses valores";
    }
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
digits[0] = "(" + digits[0];
digits[1] = digits[1] +") ";
digits[6] = digits[6] + "-";
return digits.join("");
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(lineA < (lineA+lineC) && lineB < (lineC+lineA) && lineC < (lineA+lineB) && lineA > Math.abs(lineB-lineC) && lineB > Math.abs(lineA-lineC) && lineC > Math.abs(lineB-lineA)){
    return true;
  }
  else{
    return false;
  }
}

// Desafio 13
function hydrate(str) {
  let drinksArray = str.split(" ");
  let sumOfDrinks = 0;
  for (i=0; i<drinksArray.length; i++){  
    drinksArray[i] = parseInt(drinksArray[i]) || 0;
    sumOfDrinks = sumOfDrinks + drinksArray[i];
    // esse foi um quebra cabeças, mas graças a deus o usuario "user113716" no stackOverflow respondeu essa pergunta do usuário "Tamás Pap" no stack overflow. link: https://stackoverflow.com/questions/7540397/convert-nan-to-0-in-javascript?newreg=a9cf235ec55240dcbaa6e5b9de7bc553
  }
  if(sumOfDrinks > 1){
    return sumOfDrinks + " copos de água"
  }
  if (sumOfDrinks === 1){
    return sumOfDrinks + " copo de água"
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};