// Desafio 10
function techList(array, name) {
  // seu código aqui
  let listObj = [];
  let list = array.sort();
  if (!(array.length === 0)) {
    for (let i in list) {
      listObj.push({
        tech: list[i],
        name,
      });
    }
    return listObj;
  } else {
    return "Vazio!";
  }
}

// Desafio 11
function generatePhoneNumber(value) {
  // seu código aqui
  unk = "não é possível gerar um número de telefone com esses valores";
  if (value.length === 11) {
    for (let k of value) {
      let r = 0;
      if (k < 0 || k > 9) {
        return unk
      }
      for (let j of value ){
        if (k === j)
          r++;
      }
      if (r >= 3) {
        return unk;
      }

    }

    value.splice(7, 0, '-'); 
    value.splice(0, 0, '(');
    value.splice(3, 0, ')');
    value.splice(4, 0, ' ');
    return value.join("");
  } else {
    return "Array com tamanho incorreto.";
  }
}

// Desafio 12
function triangleCheck(l1, l2, l3) {
  // seu código aqui
  let a, b, c;
  if ((l1 < l2 + l3) && (l1 > Math.abs(l2 - l3)))
    return (a = true); 
  if ((l1 > l2 + l3) && (l1 > Math.abs(l2 - l3)))
    return (a = false);
  if ((l2 < l1 + l3) && (l2 < Math.abs(l1 - l3)))
    return (b = true);
  if ((l2 > l1 + l3) && (l2 > Math.abs(l1 - l3)))
    return (b = false);
  if (l3 < l1 + l2 && l3 < Math.abs(l1 - l2))
    return (c = true);
  if (l3 < l1 + l2 && l3 > Math.abs(l1 - l2))
    return (c = false);
  return a + b + c;
}

// Desafio 13
function hydrate(value) {
  // seu código aqui
  let s = value.match(/\d+/g);
  let int;
  let array = [];
  let c = 0;

  for (let index = 0 ; index < s.length ; index += 1) {
    int = parseInt(s[index]);
    array.push(int);
    c += array[index];
  }

  if (c === 1) {
    return (c + ' copo de água');
  } else {
    return (c + ' copos de água');
  }

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
