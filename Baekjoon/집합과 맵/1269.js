//1269

const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const aArr = input[0].split(" ").map(Number);
const bArr = input[1].split(" ").map(Number);

const aSet = new Set(aArr);
const bSet = new Set(bArr);

//A-B
for (let val of bArr) {
  if (aSet.has(val)) aSet.delete(val);
}

//B-A
for (let val of aArr) {
  if (bSet.has(val)) bSet.delete(val);
}

console.log(aSet.size + bSet.size);
