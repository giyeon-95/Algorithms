const fs = require("fs");

//값이 한 줄에 공백으로 들어올 때
//ex)1 2

var inputCase2 = fs.readFileSync("/dev/stdin").toString().split(" ");

var a = parseInt(inputCase2[0]);
var b = parseInt(inputCase2[1]);

console.log(a + b);

//값이 한 줄에 하나씩 있을 때
//ex)
//1
//2
const inputCase1 = fs.readFileSync("/dev/stdin").toString().split("\n");

var a = parseInt(inputCase1[0]);
var b = parseInt(inputCase1[1]);

console.log(a + b);
