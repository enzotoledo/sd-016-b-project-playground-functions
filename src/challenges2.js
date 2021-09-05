// let list = ["React", "Jest", "HTML", "CSS", "JavaScript"]; list = list.sort();
// let nam = "lucas";

// Desafio 10
function makList(list, nam) {
  let ordlist = list.sort();
  let result = [];
  for (let iter of ordlist) {
    let tec = iter;
    result.push({
      tech: tec,
      name: nam,
    });
  }
  return result;
  // console.log(result);
}

function techList(tecs, str) {
  if (tecs.length === 0) {
    return 'Vazio!';
  }
  let objList = makList(tecs, str);
  return objList;
  // console.log(objList);
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
