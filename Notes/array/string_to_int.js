const arr = ["1", "2", "3"];

for (let val of arr) {
  console.log(typeof val);
}

for (let val of arr.map(Number)) {
  console.log(typeof val);
}
