//1764

const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const cantHears = input.slice(0, N);
const cantSees = input.slice(N, N + M);

const set = new Set(cantHears);

let count = 0;

let array = [];

for (let val of cantSees) {
  if (set.has(val)) {
    count++;
    array.push(val);
  }
}

array.sort(); //asc (사전순 정렬)

console.log(count + "\n" + array.join("\n"));
