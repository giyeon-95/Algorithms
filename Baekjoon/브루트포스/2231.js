const fs = require("fs");

N = Number(fs.readFileSync("input_example.txt").toString());

let min = 0;

//각자리수의 합 구하는 함수
function getSumOfEachDigit(number) {
  let sum = 0;

  do {
    sum += number % 10;
    number = Math.floor(number / 10);
  } while (number > 0);

  return sum;
}

for (let i = 1; i < N; i++) {
  let sum = getSumOfEachDigit(i) + i;

  if (sum === N) {
    min = i;
    return console.log(min);
  }
}

//min이 0 일경우 0 출력
if (min === 0) console.log(min);
