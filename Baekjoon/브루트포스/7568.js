const fs = require("fs");

const input = fs
  .readFileSync("input_example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((el) => Number(el)));

const array = input.slice(1, input.length); //N 제거

let result = [];

for (let i = 0; i < array.length; i++) {
  let grade = 1; //grade 1부터 증가 큰사람이 있으면 1씩 증가

  for (let j = 0; j < array.length; j++) {
    //j :  비교하려는 대상
    if (i === j) {
      continue;
    }

    if (array[i][0] < array[j][0] && array[i][1] < array[j][1]) {
      grade++;
    }
  }

  result.push(grade);
}

console.log(result.join(" "));
