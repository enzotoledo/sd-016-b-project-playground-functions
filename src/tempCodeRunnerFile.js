const firstArr = [9, 1, 2, 3, 9, 5, 7];
const secondArr = [0, 4, 4, 4, 9, 2, 1];
const thirdArr = [0, 0, 0];
let repeatedNumber = 0;
let biggestNumber = 0;

function highestCount(numbers) {
  for (i = 0; i >= biggestNumber; i++) {
    if (numbers[i] > biggestNumber) {
      repeatedNumber = repeatedNumber + 1;
    }
  };
}
console.log(highestCount(firstArr));