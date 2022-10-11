const string = "1 2 3 4 5";

const elementsArray = string.split(" ").map((element) => Number(element));

//[ 1, 2, 3, 4, 5 ]
console.log(elementsArray);
