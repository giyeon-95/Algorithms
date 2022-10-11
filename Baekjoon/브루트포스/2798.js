const fs = require("fs");

const input = fs.readFileSync("input_example.txt").toString().split("\n");

input[0] = input[0].split(" ");

const N = Number(input[0][0]);
const M = Number(input[0][1]);

let answer = 0;

const cards = input[1].split(" ").map((card) => Number(card));

//combination func
function getCombination(array, selectNumber) {
  const resultArray = [];

  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }

  array.forEach((fixed, index, originArray) => {
    const restArray = originArray.slice(index + 1);

    const combinations = getCombination(restArray, selectNumber - 1);

    const attachFixed = combinations.map((element) => [fixed, ...element]);

    resultArray.push(...attachFixed);
  });

  return resultArray;
}

getCombination(cards, 3).forEach((element) => {
  const sum = element.reduce((a, b) => a + b);
  const gap = M - sum;

  if (gap >= 0 && answer <= sum) {
    answer = sum; //answer갱신
  }
});

console.log(answer);
