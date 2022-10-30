/*
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;

reduce : reduce callback 함수는 4가지 인수를 받는다.

arr.reduce(callback, initialValue)

1. accumulator : callback 함수의 반환값을 누적
2. currentValue : 배열의 현재 요소 
3. index  : 배열의 현재 요소 인덱스
4. array : 호출한 배열

initialValue는 Option사항 이며, 초기값을 제공하지 않을경우 배열의 첫 번째 요소를 사용한다.
(즉, initVal을 지정하지 않으면 reduce내의 반복은 배열의 크기 -1 번만큼 실행되며, 
  지정하게 되면 배열의 크기만큼 실행된다. )

return 값 : 배열을 순서대로 불러 각 요소에 대해 callback 함수를 실행한 결과를 누적한 값.

*/

//ex 1)배열의 모든 값 합산

const numbers = [1, 2, 3, 4, 5];

const sum1 = numbers.reduce((acc, currentNumber) => {
  // console.log("실행됩니다.");
  // console.log("acc : ", acc);
  // console.log("cur : ", currentNumber);
  return acc + currentNumber;
});

//ex 2) 오브젝트 배열에서 원하는 항목의 값만 더하기

const friends = [
  {
    name: "양주진",
    age: 32,
    job: "코인러",
    married: false,
  },
  {
    name: "오영제",
    age: 32,
    job: "랩퍼",
    married: false,
  },
  {
    name: "서준형",
    age: 32,
    job: "2년차 유부남",
    married: true,
  },
];

const ageSum = friends.reduce((acc, current) => {
  // console.log("실행됩니다.");
  // console.log("acc : ", acc);
  // console.log("cur : ", current);

  return acc + current.age;
}, 0);

console.log(ageSum);

// reduce 직접 구현
const reduce = (arr, callback, initialVal) => {
  for (let val of arr) {
    initialVal = callback(initialVal, val);
  }

  return initialVal;
};

const sum = (a, b) => a + b;

console.log(reduce([1, 2, 3, 4, 5], sum, 0));
