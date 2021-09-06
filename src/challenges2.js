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

// Nesse desafio tive que usar o Template string para passar no texte do lint.
// O template string serve para criarmos string sem precisar ficar abre 'aspa', fecha 'aspa', coloca '+' ou ',', para colocar uma variavel em uma string.
// No template string basta que eu abra as duas 'crases' e quando for colocar uma variavel use um '$'seguido de'{}' e a variave no meio das '{}'.

// Desafio 13
function hydrate(param) {
  let character = param.split(' ').join('');
  let cont = 0;
  for (let value of character) {
    if (value <= 9) {
      cont += parseInt(value, 10);
    }
  }
  if (cont === 1) return `${cont} copo de água`;
  return `${cont} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
