const array = [1, 2, 3, 4, 5];

//배열 초기화 (1차원 배열)
const arr = new Array(5).fill(false);

//배열 초기화 (2차원 배열)
const arr2 = Array.from(Array(5), () => Array(5).fill(0));

//배열 첫번째 원소 (영구 반영)
const firstValue = array.shift();

//맨 앞 3개 제거
const slicedArr1 = array.slice(3);

//index 0~4 까지 추출
const slicedArr2 = array.slice(0, 5);

//index 1부터 요소 2개 지우기 (영구반영)
const deletedArray = array.splice(1, 2);

//최소
const min = Math.min(...array);
//최대
const max = Math.max(...array);

//배열요소 String -> number
const toNumber = ["1", "2", "3"].map(Number);

//배열의 총합
const sum = array.reduce((a, b) => a + b);

//각자리수의 합
function getSumOfEachDigit(number) {
  let sum = 0;

  do {
    sum += number % 10;
    number = Math.floor(number / 10);
  } while (number > 0);

  return sum;
}

//Set 선언
const set = new Set(array);

//차집합 (set에서 원하는 원소 걸러내기)
for (let val of array) {
  if (set.has(val)) set.delete(val);
}

//set 크기
set.size;

//map 선언
const map = new Map();

//map 초기화
for (let val of array) {
  map.set(val, val.toString());
}

//map array 인덱스와 함께 value 초기화
const mapWithIndex = new Map(array.map((value, index) => [index + 1, value]));

//map 원소 접근
map.get(5);

//숫자type검사 (숫자타입이 아닌지 ? )-> isNaN()
isNaN(number); //주의 : '123'은 숫자타입이라고 판단함

//string 자르기 : index 1부터 2까지 출력
str.substring(1, 3);

//string 자르기 : index 2부터 맨뒤까지 출력(인덱스 1까지 버리기)
str.substring(2);

//배열 정렬 (오름차순)
array.sort(function (a, b) {
  return a - b;
});

//배열 정렬 (내림차순)
arr.sort(function (a, b) {
  return b - a;
});
