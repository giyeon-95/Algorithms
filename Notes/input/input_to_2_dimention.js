const fs = require("fs");

//example...

// 58 183
// 55 185
// 88 186
// 60 175
// 46 155

const input = fs
  .readFileSync("input_example.txt")
  .toString()
  .trim() //백준 trim주의
  .split("\n")
  .map((el) => el.split(" ").map((el) => Number(el)));

console.log(input);
