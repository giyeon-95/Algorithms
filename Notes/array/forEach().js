const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, originArray) => {
  console.log("index : ", index);
  console.log("value : ", number);
  console.log("originArray : ", originArray);
});
