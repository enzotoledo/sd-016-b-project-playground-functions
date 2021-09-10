// Desafio 10
function techList(tech, name) {
  let result = [];
  if (tech.length === 0) {
    return 'Vazio!';
  } else {
    tech = tech.sort();
    for (let position in tech) {
      result[position] = {
        tech: tech[position],
        name: name,
      }
    }
    return result;
  }
}
// Desafio 11
function generatePhoneNumber() {
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) &&
  ((lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC))) &&
  ((lineC < lineA + lineB) && (lineC > Math.abs(lineA - lineB)))) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(shots) {
  shots = shots.replace(/\D/g, '');
  let drinkGlassWater = 0;
  for (index = 0; index < shots.length; index++) {
    let glassWater = parseInt(shots[index], 10);
    drinkGlassWater = drinkGlassWater + glassWater;
  }

  switch (drinkGlassWater) {
    case 1:
      return `${drinkGlassWater} copo de água`;
      break;

    default:
      return `${drinkGlassWater} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
