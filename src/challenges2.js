// Desafio 10
function techList(arrey, name) {
  let object = {};
  let list = [];
  if (arrey.length === 0) return 'Vazio!';
  if (arrey.length > 0) {
    for (let tech of arrey.sort()) {
      object = {
        tech: tech,
        name: name,
      };
      list.push(object);
    }
  }
  return list;
}

// Desafio 11
function generatePhoneNumber() {

}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB) - Math.abs(lineC))) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(param) {
  let character = param.split('');
  let cont = 0;
  for (let value of character) {
    switch (value) {
      case '1':
        cont += 1;
        break;
      case '2':
        cont +=2;
        break;
      case '3':
        cont +=3;
        break;
      case '4':
        cont += 4;
        break;
      case '5':
        cont += 5;
        break;
      case '6':
        cont += 6;
        break;
      case '7':
        cont += 7;
        break;
      case '8':
        cont += 8;
        break;
      case '9':
        cont += 9;
        break;
    }
  }
  if (cont === 1){
    return cont +' copo de água';
  } else {
    return cont + ' copos de água';
  }
  }

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
