const arr = ["a", "b", "c", "d", "e"];
const arr2 = ["a", "b", "c", "d", "e"];
const arr3 = ["a", "b", "c", "d", "e"];

//splice() => 배열에 값 요소 추가 & 삭제 (index로 접근)

arr.splice(1, 0, 100); // index 1을 100으로 교체 후 기존 값들을 뒤로 밀기

console.log(arr);
// [ 'a', 100, 'b', 'c', 'd', 'e' ]

arr2.splice(1, 2, 100); // index 1을 100으로 교체 후, index 1 부터 2개 지우고, 뒤로 밀기

console.log(arr2);
//[ 'a', 100, 'd', 'e' ]

arr3.splice(1, 2); //index 1부터 요소 2개 지우기

console.log(arr3);
//[ 'a', 'd', 'e' ]
