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
  let numeroRepetido = 0;
  let indice = 1;
  let repetiu3 = false;
  if (numero.length != 11){
    return "Array com tamanho incorreto.";
  }

  for(index = 0; index < numero.length; index +=1) {
    if ( numero[indice] == numero[index]){
      numeroRepetido +=1;
    } else if (index == numero.lenght - 1) {
      indice +=1;
    }
    numeroRepetido = 0;
  }

  for (let runner in numero) {
    if (numeroRepetido <= 3 && numero[indice] == numero[runner]) {
      numeroRepetido += 1;
    } else if (numeroRepetido == 3) {
      repetiu3 = true;
      return "não é possível gerar um número de telefone com esses valores";
    } else if (indice == numero.length) {
      numeroRepetido = 0;
    } else if (numero[runner] < 0 || numero[runner] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    } else {
      indice += 1;
    }
  }

  if (numero.length == 11 && numeroRepetido < 3) {
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
