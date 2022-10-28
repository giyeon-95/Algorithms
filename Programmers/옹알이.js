let babbling = ["aya", "yee", "u", "maa"];

let enable = ["aya", "ye", "woo", "ma"];

let count = 0;

console.log(count);

for (let val of babbling) {
  if (
    enable.some((f) => {
      console.log("f :", f);

      return babbling.includes(f + f);
    })
  )
    continue;

  count++;

  console.log(count);
  return count;
}
