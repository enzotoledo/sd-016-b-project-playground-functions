// Desafio 10
function techList(techs, name) {
  let arraySort = techs.sort();
  let arrayObjects = [];
  if (techs.length < 1) {
    return 'Vazio!';
  } else {
    for (let runner in techs) {
      arrayObjects.push({
        tech: techs[runner],
        name: name
      })
    }
    return arrayObjects;
  }
}

// Desafio 11
function generatePhoneNumber(numero) {
  let phoneNumber = numero;
  function count (phoneNumber){
    phoneNumber.sort();
    let numeroSendoUsado = null;
    let vezesQrepetiu = 0;
    for (index = 0; index < phoneNumber.length; index += 1){
      if (phoneNumber[index] != numeroSendoUsado){
        numeroSendoUsado = numero[index];
        vezesQrepetiu = 1;
      } else if (vezesQrepetiu == 3) {
        return "não é possível gerar um número de telefone com esses valores";
      } else {
        vezesQrepetiu += 1;
      }
    }
  }
  if (numero.length != 11){
    return "Array com tamanho incorreto.";
  }

  for (let runner in numero) {
    if (numero[runner] < 0 || numero[runner] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
  
    }
  }

  if (count(phoneNumber) == "não é possível gerar um número de telefone com esses valores") {
    return "não é possível gerar um número de telefone com esses valores";
  } else if (numero.length == 11){
    return "(" + numero[0] + numero[1] + ")" + " " + numero[2] + numero[3] + numero[4] + numero[5] + numero[6] + "-" + numero[7] +numero[8] + numero[9] + numero[10];
  }
}

// Desafio 12
function triangleCheck(a, b, c) {
  if ((a < b +c) && (b < a + c) && (c < a + b) && (a > Math.abs(b - c)) && (b > Math.abs(a - c)) && (c > Math.abs(a - b))) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13 Consultei o site stackoverflow para encontrar a utilizacao do
// /\d+/g e .match(regex)
// link: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
function hydrate(string) {
  let regex = /\d+/g;
  let matches = string.match(regex);
  let coposDagua = 0;
  for (let runner in matches) {
    coposDagua += Math.abs(matches[runner]);
  }
  if (coposDagua == 1) {
    return 1 + " copo de água";
  } else {
    return coposDagua + " copos de água";
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
