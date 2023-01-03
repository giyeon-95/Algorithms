//한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.

const input = "KoreaTimeGood";

//me
function solution(str) {
  let answer = 0;
  for (let x of str) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}
console.log(solution(input));
