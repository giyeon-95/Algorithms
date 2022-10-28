const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = input[0];

const array = input[1].split(" ").map(Number);

//최소
const min = Math.min(...array); //caution!
//최대
const max = Math.max(...array);

console.log(min, " ", max);
