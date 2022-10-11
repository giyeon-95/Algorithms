//10816

const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, hasCards, M, cards] = [
  Number(input[0]),
  input[1].split(" ").map(Number),
  Number(input[2]),
  input[3].split(" ").map(Number),
];

const map = new Map();

//set map
for (let number of hasCards) {
  if (map.has(number)) map.set(number, map.get(number) + 1);
  else map.set(number, 1);
}

let answer = [];

//check
for (let number of cards) {
  if (map.has(number)) answer.push(map.get(number));
  else answer.push(0);
}

console.log(answer.join(" "));
