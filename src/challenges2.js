// Desafio 10
function techList(techs, names) {
let tech = techs.sort ();
let returnList = [];

if (tech.length === 0) {
  return 'Vazio!';
}
for (let index = 0; index < techs.length; index+=1) {
  returnList.push ({
      tech:techs[index], 
      name:names,});
}
return returnList;
}
//console.log(returnList);

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
