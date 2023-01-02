const string = "ssrrss";

const map = new Map();
let answer = [];

for (let i = 0; i < string.length; i++) {
  if (map.has(string[i])) {
    answer.push(i - map.get(string[i]));
  } else {
    answer.push(-1);
  }
  map.set(string[i], i);
  console.log(map);
  console.log(answer);
}
