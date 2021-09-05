// Desafio 10
function createListTec(listTech, name) {
  let tecLength = listTech.length;
  let listObj = [];
  let result = [];
  for (let index = 0; index < tecLength; index += 1) {
    let objVar = {
      tech: listTech[index],
      name: name
    };
    listObj.push(objVar);
  }
  if (tecLength === 5) {
    // eslint-disable-next-line no-use-before-define
    result = checkListSize(listObj);
  } else {
    result = listObj;
  }
  return result;
}

function checkListSize(listObj) {
  return listObj.sort(function (a, b) {
    return a.tech.localeCompare(b.tech);
  });
}

function techList(tec, name) {
  if (tec.length === 0) {
    return 'Vazio!';
  }
  return createListTec(tec, name);
}

// Desafio 11
function structurePhoneNumber(str, conter) {
  switch (conter) {
      case 1:
          str += ') ';
          break;
      case 6:
          str += '-';
          break;
  }
  return str;
}

function convertNumberStr(character) {
  return character.toString();
}

function buildNumber(phoneNumberOk) {
  let phoneOk = '(';
  for (let cont = 0; cont < phoneNumberOk.length; cont += 1) {
      phoneOk += structurePhoneNumber(convertNumberStr(phoneNumberOk[cont]), cont);
  }
  return phoneOk;
}

function testRepeat(arrayNumRepeat) {
  let rept = 3;
  for (let ind = 0; (ind < 11) && (rept >= 1); ind += 1) {
      rept = 3;
      for (let indD = 0; indD < 11; indD += 1) {
          rept -= arrayNumRepeat[ind] === arrayNumRepeat[indD] ? 1 : 0;
      }
  }
  return rept === 0 ? false : true;
}

function checkNumberMaiorOrMenor(num) {
  return num < 0 || num > 9 ? false : true;
}

function generatePhoneNumber(createPhoneNumber) {
  if (createPhoneNumber.length !== 11) {
      return 'Array com tamanho incorreto.';
  }
  if (createPhoneNumber.every(checkNumberMaiorOrMenor) === false) {
      return 'não é possível gerar um número de telefone com esses valores';
  }
  if (testRepeat(createPhoneNumber) === false) {
      return 'não é possível gerar um número de telefone com esses valores';
  }
  return buildNumber(createPhoneNumber);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (lineA + lineB > lineC ? true : false) && (lineA + lineC > lineB ? true : false) && (lineB + lineC > lineA ? true : false);
}

// Desafio 13
function hydrate(str) {
  let strTam = str.length - 1;
  let strNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let qtd = 0;
  for (let i = 0; i < strTam; i += 1) {
    for (let ii = 0; ii < 9; ii += 1) {
      if (str[i] == strNumber[ii]) {
        let n = strNumber[ii];
        qtd += n;
      }
    }
  }
  if (qtd == 1) {
    return qtd + " copo de água";
  } else {
    return qtd + " copos de água";
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
