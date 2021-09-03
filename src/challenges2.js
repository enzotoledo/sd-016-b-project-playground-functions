// Desafio 10
function createListTec(listTech, name) {
  let tecLength = listTech.length;
  let listObj = [];
  let result = [];
  for (let index = 0; index < tecLength; index += 1) {
    let objVar = { tech: listTech[index], name: name  };
    listObj.push(objVar);
  } if (tecLength === 5) {
    // eslint-disable-next-line no-use-before-define
    result = checkListSize(listObj);
  } else {
    result = listObj;
  }
  return result;
}

function checkListSize(listObj) { 
  return listObj.sort(function (a, b) { return a.tech.localeCompare(b.tech); }); 
}

function techList(tec, name) {
  if (tec.length === 0) { return 'Vazio!'; }
  return createListTec(tec, name);
}

// Desafio 11
function generatePhoneNumber(arrayOnzeNum) {
  var invalidNumber = true;
  var tamArray = arrayOnzeNum.length;
  var numberOk = 0;
  if (tamArray == 11) {
    let selectNumber = true;
    for (var index = 0;
      (index < arrayOnzeNum.length) && (invalidNumber); index++) {
      var repeat = 0;
      if (arrayOnzeNum[index] < 0 || arrayOnzeNum[index] > 9) {
        invalidNumber = false;
        numberOk = 1;
      } else {
        for (var i = 0; i < arrayOnzeNum.length; i++) {
          if (arrayOnzeNum[index] === arrayOnzeNum[i]) {
            repeat++;
            if (repeat == 3) {
              invalidNumber = false;
              numberOk = 1;
            }
          }
        }
      }
    }
    if (numberOk != 0) {
      return "não é possível gerar um número de telefone com esses valores";
    } else {
      let phoneOK = "(";
      for (let cont = 0; cont < arrayOnzeNum.length; cont++) {
        var tempTostr = arrayOnzeNum[cont];
        tempTostr = tempTostr.toString();
        switch (cont) {
          case 1:
            phoneOK += tempTostr + ') ';
            break;
          case 6:
            phoneOK += tempTostr + '-';
            break;
          default:
            phoneOK += tempTostr;
        }
      }
      return phoneOK;
    }
  } else {
    return "Array com tamanho incorreto.";
  }
}



// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (lineA + lineB > lineC ? true : false) && (lineA + lineC > lineB ? true : false) && (lineB + lineC > lineA ? true : false);
}

// Desafio 13
function hydrate(str) {
  let strTam = str.length - 1;
  let strNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let taNumber = strNumber.length;
  let qtd = 0;

  for (let i = 0; i < strTam; i++) {
    for (let ii = 0; ii < taNumber; ii++) {
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
