// Desafio 10
function techList(tecs, name) {
  if (tecs.length < 1) return 'Vazio!';
  tecs = tecs.sort();
  let l = [];
  for (let i of tecs) l.push({ tech: `${i}`, name: `${name}` });
  return l;
}

// Quantidade de um valor numa array
function quantasVezesAparece(v, a) {
  let quantidade = 0;
  for (let j of a) if (j === v) quantidade += 1;
  return quantidade;
}

function testeNumeros(a) {
  for (let i of a) if (i < 0 || i > 9 || (quantasVezesAparece(i, a) > 2)) return false;
  return true;
}
// Desafio 11
function generatePhoneNumber(a) {
  if (a.length !== 11) return 'Array com tamanho incorreto.';
  if (testeNumeros(a)) {
    return `(${a[0]}${a[1]}) ${a[2]}${a[3]}${a[4]}${a[5]}${a[6]}-${a[7]}${a[8]}${a[9]}${a[10]}`;
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

// Desafio 12
function triangleCheck(a, b, c) {
  if (a < (b + c) && a > Math.abs(b - c)) return true;
  return false;
}

// Desafio 13
function hydrate(s) {
  let a = 0;
  for (let i of s.split(' ')) if (i > 0) a += i * 1;
  if (a === 1) return `${a} copo de água`;
  return `${a} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
