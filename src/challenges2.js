// Desafio 10
function techList(tecs, name) {
  if (tecs.length < 1) return 'Vazio!';
  tecs = tecs.sort();
  let l = [];
  for (let i of tecs) l.push({ tech: `${i}`, name: `${name}` });
  return l;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

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
