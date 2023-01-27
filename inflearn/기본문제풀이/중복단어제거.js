//소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하 세요.
//제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

const input = ["good", "time", "good", "time", "student"];

//me
function solution(array) {
  let arr = [];
  let answer;

  let set = new Set();

  for (let val of array) {
    if (set.has(val)) continue;

    arr.push(val);
    set.add(val);
  }

  answer = arr.join("\n");

  return answer;
}
console.log(solution(input));

//lec
function solution1(array) {
  let answer;

  return answer;
}
console.log(solution1(input));
