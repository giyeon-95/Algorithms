//7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

let arr = [5, 3, 7, 11, 2, 15, 17];

//me
function solution(arr) {
  let answer = Math.min(...arr);

  return answer;
}

console.log(solution(arr));

//lec
function solution2(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }

  answer = min;
  return answer;
}

console.log(solution2(arr));
