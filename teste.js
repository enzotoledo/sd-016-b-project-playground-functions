const array = [1, 1, 2, 2, 3, 4, 1, 5]

for (let i = 0; i < array.length; i++) {
  let counter = 1;
  for (let j = 0; j < array.length; j++) {
    if (j == i) {
      continue;
    }
    if (array[i] === array[j]) {
      counter++;
    }
  }
  if (counter >= 3) {
    console.log("Número repetido 3 vezes");
  }
}
