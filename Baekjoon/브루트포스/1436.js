const fs = require("fs");

let input = Number(fs.readFileSync("input_example.txt").toString());

let title = 666; //title은 666부터 시작한다.  input : 1 -> title : 666

while (true) {
  if (title.toString().includes("666")) {
    input--;

    if (input == 0) {
      break;
    }
  }
  title++;
}

console.log(title);
