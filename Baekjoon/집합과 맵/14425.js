//14425

const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);

const withoutCountArr = input.slice(1); //맨 앞 1개 없애기

const setWords = new Set(withoutCountArr.slice(0, N)); //맨 앞부터 5개만 추출

const words = withoutCountArr.slice(N); //맨 앞부터 5개 없애기

let count = 0;

for (let val of words) {
  if (setWords.has(val)) count++;
}

console.log(count);
