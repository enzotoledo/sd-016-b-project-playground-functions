// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let arrayOrdenada = tech.sort();
  let array = [];

  if (arrayOrdenada.length === 0) {
    return 'Vazio!';
  } else if (arrayOrdenada.length > 0) {
    for(let index in arrayOrdenada) {
      array.push({
        tech: arrayOrdenada[index],
        name: name,
      })
    }
  }
  return array;
}
console.log(techList(
  ["React", "Jest", "HTML", "CSS", "JavaScript"],
  "Lucas"));


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(valor1, valor2, valor3) {
  // seu código aqui
  if (valor1 > valor2 + valor3 && valor1 < Math.abs(valor1 + valor2 + valor3)) {
    return false;
  } else if (valor2 > valor1 + valor3 && valor2 < Math.abs(valor1 + valor2 + valor3)) {
    return false;
  } else if (valor3 > valor1 + valor2 && valor3 < Math.abs(valor1 + valor2 + valor3)) {
    return false;
  } else if (valor1 < valor2 + valor3) {
    return true;
  } else if (valor2 < valor1 + valor3) {
    return true;
  } else if (valor3 < valor1 + valor2) {
    return true;
  }
  
  
   
}
console.log(triangleCheck(10, 13, 2));

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
