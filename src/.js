function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA) > (Math.abs(lineB) + Math.abs(lineC))) {
    return false;
  } else if (Math.abs(lineA) < (Math.abs(lineB) - Math.abs(lineC))) {
    return false;
  } else {
    return true;
  }
}


let arrayTriangle = [10, 14, 8];
let lineA = arrayTriangle[0];
let lineB = arrayTriangle[1];
let lineC = arrayTriangle[2];
// let result= Boolean;

if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
  console.log (true);
} else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
  console.log (true);
} else if (lineC < (lineA + lineB) && lineC > Math.abs(lineB - lineA)) {
  console.log (true);
} else {
  console.log (false);
}

