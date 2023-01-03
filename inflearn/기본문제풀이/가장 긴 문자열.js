//N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

const input = ["teacher", "time", "student", "beautiful", "good"];

//me
function solution(n, arr) {
  let answer = "";
  let long = 0;

  for (let val of arr) {
    if (val.length > long) {
      long = val.length;
      answer = val;
    }
  }

  return answer;
}
console.log(solution(5, input));
