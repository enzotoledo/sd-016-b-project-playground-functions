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
function hydrate() {

}

hydrate('1 cachaça, 5 cervejas e 1 copo de vinho');

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
