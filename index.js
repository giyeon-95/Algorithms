const arr = [2, 1, 3, 1, 4, 2, 1, 3];

let obj = {};

for (let i = 0; i < arr.length; i++) {
  //처음들어온 문자라면 obj key 값 0으로 초기화
  if (obj[arr[i]] === undefined) {
    //처음에 나온 index와, false값으로 초기화.
    obj[arr[i]] = [i, false];
  } else {
    //또나온 숫자라면??
    //false -> true로 바꿔주고, 인덱스를 갱신한다.

    //한번 더 나온 숫자이고(true), 이전값과 비교해서 더 큰 숫자라면 그냥 true로만 바꿔주기
    if (obj[arr[i]][1] === true && i - obj[arr[i]][0] > obj[arr[i]][0]) {
      continue;
    } else {
      obj[arr[i]] = [i - obj[arr[i]][0], true];
    }
  }
}

const keys = Object.keys(obj);

let array = [];

for (let i = 0; i < keys.length; i++) {
  const key = keys[i]; // 각각의 키
  const value = obj[key]; // 각각의 키에 해당하는 각각의 값

  if (value[1] === false) {
    continue;
  } else {
    //true인 값만 검사
    array.push(value[0]);
  }
}
console.log(Math.min(...array));

console.log(obj);
