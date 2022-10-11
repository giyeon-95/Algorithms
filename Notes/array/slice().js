const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const slicedArr1 = array.slice(3); // 맨 앞 3개 제거

const slicedArr2 = array.slice(0, 5); //index 0~4 까지 추출

console.log(slicedArr1); // [3,4,5,6,7,8,9,10]
console.log(slicedArr2); // [0,1,2,3,4]
