const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim(); //just string

const set = new Set();

//i => 몇개 단위로 자를건지 (1  ~ 배열크기)
for (let i = 1; i <= input.length; i++) {
  //범위 : 시작점에서부터 단위를 더한값이 배열크기를 넘지 말아야함.
  for (let j = 0; j + i <= input.length; j++) {
    //j 반복문 순회하는 동안 i는 고정
    set.add(input.substring(j, j + i));
  }
}

// console.log(set);
console.log(set.size);
