// Desafio 10
// const firstArr = ["React", "JavaScript", "Python", "React Native", "TypeScript"];


function techList(technologies, name) {
  let technologiesList = technologies.sort();
  let objList = [];

  for (i = 0; i < technologiesList.length; i++) {
    objList[i] = {
      tech: technologiesList[i],
      name,
    };
  }
  if (technologiesList.length === 0) return 'Vazio!'

  return objList;
}
// console.log(techList(firstArr));


















// Desafio 11
function generatePhoneNumber() {

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
