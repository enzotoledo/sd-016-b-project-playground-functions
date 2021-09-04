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

/* 
a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois
e
a medida de qualquer um dos lados seja maior que o valor absoluto da diferença entre essas medidas. */